const path = require('path');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const { nanoid } = require('nanoid');


const file = path.join(__dirname, 'mechway.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

async function init() {
  await db.read();
  db.data = db.data || { contacts: [], bookings: [], inquiries: [] };
  await db.write();
}

async function addContact(obj) {
  await db.read();
  const entry = { id: nanoid(), created_at: new Date().toISOString(), ...obj };
  db.data.contacts.unshift(entry);
  await db.write();
  return entry;
}

async function addBooking(obj) {
  await db.read();
  const entry = { id: nanoid(), created_at: new Date().toISOString(), ...obj };
  db.data.bookings.unshift(entry);
  await db.write();
  return entry;
}

async function addInquiry(obj) {
  await db.read();
  const entry = { id: nanoid(), created_at: new Date().toISOString(), ...obj };
  db.data.inquiries.unshift(entry);
  await db.write();
  return entry;
}

async function getAll() {
  await db.read();
  return {
    contacts: db.data.contacts || [],
    bookings: db.data.bookings || [],
    inquiries: db.data.inquiries || []
  };
}

module.exports = { init, addContact, addBooking, addInquiry, getAll };
