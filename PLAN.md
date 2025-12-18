# MongoDB Backend Fix - Implementation Plan

## Information Gathered
- Server.js is properly configured for MongoDB with Mongoose
- MongoDB Atlas connection string: mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0
- Conflicting db.js file uses lowdb (JSON file database) instead of MongoDB
- Server is not currently running
- All necessary MongoDB dependencies are installed (mongoose, mongodb)

## Plan: Remove Conflicting Database Layer & Fix MongoDB Integration

### Step 1: Remove Conflicting Database Layer
- Remove or rename `server/db.js` (old lowdb implementation)
- Ensure server.js exclusively uses Mongoose/MongoDB models

### Step 2: Verify MongoDB Configuration
- Check MongoDB connection string in environment
- Ensure proper error handling for database connections

### Step 3: Restart Server with MongoDB
- Start the Node.js server
- Verify MongoDB connection in console logs
- Test health endpoint to confirm server is running

### Step 4: Test Data Storage to MongoDB
- Test POST /api/contact endpoint
- Test POST /api/book endpoint
- Test POST /api/inquiry endpoint
- Verify data is actually saved to MongoDB collections

### Step 5: Migrate Existing Data (if needed)
- Run migration script if legacy JSON data exists in mechway.json
- Ensure all existing data is properly migrated to MongoDB

## Dependent Files to be Edited
- `server/db.js` - Remove conflicting lowdb implementation
- `server/server.js` - Ensure clean MongoDB-only implementation
- Potentially `.env` - If MongoDB URI needs updating

## Followup Steps After Editing
1. Start server: `cd server && npm start`
2. Test endpoints with curl or frontend forms
3. Verify data in MongoDB Atlas dashboard
4. Check admin panel for data visibility

## Expected Outcome
- Clean MongoDB-only backend
- Data properly stored in MongoDB collections
- Working admin panel displaying MongoDB data
- No more data storage issues
