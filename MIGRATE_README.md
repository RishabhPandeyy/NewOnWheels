
Migration instructions — move `mechway.json` data into MongoDB

1) Install dependency

  cd server
  npm install mongodb

2) Provide MongoDB connection

You can run a local MongoDB (default URI used by script):

  export MONGO_URI="mongodb://127.0.0.1:27017"

Or use a MongoDB Atlas connection string:

  export MONGO_URI="mongodb+srv://user:pass@cluster.example.mongodb.net"

3) Run the migration

  node migrate_to_mongo.js


The script will use database `mechway` and collections `contacts`, `bookings`, `inquiries`.

4) Verify

Use `mongosh`, `mongo`, or a GUI like MongoDB Compass to inspect the inserted documents.

Notes
- Documents that include an `id` field will be migrated as `_id` in MongoDB to avoid duplicates on repeated runs (script uses upsert semantics).
- The script adds a `migratedAt` timestamp to each document.

- If you want the server to use MongoDB instead of `mechway.json`, I can update the server code next; tell me if you want that.
