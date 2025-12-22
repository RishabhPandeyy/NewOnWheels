
/*
Migration script: server/migrate_to_mongo.js
Reads server/mechway.json and inserts (upserts) documents into a MongoDB database.
Usage:
  1. Install dependency: `cd server && npm install mongodb`
  2. Provide MongoDB URI via env var: `export MONGO_URI="mongodb://localhost:27017"`
     (or set it to your Atlas URI)
  3. Run: `node migrate_to_mongo.js`

The script will create/use database `mechway` and collections: contacts, bookings, inquiries.
For each record, if it contains an `id` field it will be used as `_id` in MongoDB to avoid duplicates.
*/

const fs = require('fs').promises;
const path = require('path');
const { MongoClient } = require('mongodb');


const DATA_FILE = path.join(__dirname, 'mechway.json');
const DEFAULT_URI = 'mongodb://127.0.0.1:27017';
const DB_NAME = 'mechway';

async function readData() {
  try {
    const text = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(text || '{}');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Data file not found:', DATA_FILE);
      return {};
    }
    throw err;
  }
}

function normalizeDocs(items) {
  if (!Array.isArray(items)) return [];
  return items.map(item => {
    const doc = Object.assign({}, item);
    if (doc.id && !doc._id) {
      doc._id = doc.id;
      delete doc.id;
    }
    doc.migratedAt = new Date();
    return doc;
  });
}

async function migrateCollection(db, name, items) {
  const docs = normalizeDocs(items);
  if (docs.length === 0) {
    console.log(`No documents to import for collection '${name}'.`);
    return { inserted: 0, upserted: 0 };
  }

  const col = db.collection(name);
  const ops = docs.map(doc => {
    if (doc._id) {
      return {
        replaceOne: {
          filter: { _id: doc._id },
          replacement: doc,
          upsert: true
        }
      };
    } else {
      return { insertOne: { document: doc } };
    }
  });

  const result = await col.bulkWrite(ops, { ordered: false });
  const inserted = result.insertedCount || 0;
  const upserted = (result.upsertedCount || 0);
  return { inserted, upserted };
}

async function main() {
  const uri = process.env.MONGO_URI || DEFAULT_URI;
  console.log('Using MongoDB URI:', uri);

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(DB_NAME);
    console.log('Connected to MongoDB, database:', DB_NAME);

    const data = await readData();

    const collections = [
      { name: 'contacts', items: data.contacts || data.contact || [] },
      { name: 'bookings', items: data.bookings || data.booking || [] },
      { name: 'inquiries', items: data.inquiries || data.inquiry || data.inquiries || [] }
    ];

    for (const c of collections) {
      try {
        const res = await migrateCollection(db, c.name, c.items);
        console.log(`Collection '${c.name}': inserted=${res.inserted} upserted=${res.upserted}`);
      } catch (err) {
        console.error(`Failed to migrate collection '${c.name}':`, err);
      }
    }

    console.log('Migration complete.');
  } catch (err) {
    console.error('Migration failed:', err);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
