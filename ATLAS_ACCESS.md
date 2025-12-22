# How to Access Your "mechway" Database

## Current Database Connection
Your app is connected to **MongoDB Atlas (Cloud)**, not local MongoDB.

Connection String: `mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0`

## How to View Your Data

### Method 1: MongoDB Atlas Web Interface
1. Go to https://cloud.mongodb.com
2. Log in with your MongoDB Atlas account
3. Navigate to your cluster: `Cluster0`
4. Click "Browse Collections"
5. You'll see databases including your "mechway" database with collections:
   - `contacts`
   - `bookings` 
   - `inquiries`
   - `users`

### Method 2: MongoDB Compass (Desktop App)
1. Download MongoDB Compass
2. Use this connection string:
   ```
   mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0
   ```
3. Connect and browse your databases

### Method 3: Command Line (MongoDB Shell)
```bash
mongosh "mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0"
```
Then:
```javascript
show dbs
use mechway
show collections
```

## If You Want Local MongoDB Instead

To switch to local MongoDB:
1. Make sure MongoDB is installed and running locally
2. Update your `.env` file:
   ```
   MONGO_URI=mongodb://127.0.0.1:27017/mechway
   ```
3. Restart your server

## Current Data Status
Your app has been successfully saving data to the Atlas database. The "mechway" database exists and contains your application's data!
