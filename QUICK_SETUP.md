# Quick Setup Guide for MechWay Data Storage

## You Need These Files

### 1. Backend API Configuration

Create this file: `server/vercel.json`
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

### 2. Environment Variables Template

Create this file: `server/.env.example`
```env
# MongoDB Atlas Connection
MONGO_URI=mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0

# JWT Secret (Generate a random string)
JWT_SECRET=your_super_secret_jwt_key_change_this

# Admin Key for admin panel
ADMIN_KEY=your_admin_secret_key

# Razorpay Keys (Optional)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Port
PORT=4000
```

### 3. Updated Frontend Configuration

For your Vercel deployment, update the `getBackendURL()` function in all HTML files:

**Find this in each HTML file:**
```javascript
const getBackendURL = () => {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return window.location.protocol + '//' + window.location.hostname + ':4000';
    }
    return 'http://127.0.0.1:4000';
};
```

**Replace with:**
```javascript
const getBackendURL = () => {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return 'https://your-backend-api.railway.app'; // Replace with your actual backend URL
    }
    return 'http://127.0.0.1:4000';
};
```

## Deployment Options

### Option 1: Railway (Recommended - Easiest)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your MechWay repo
5. Set root directory to `server`
6. Add environment variables from `.env.example`
7. Deploy and get your URL like `https://your-app.railway.app`

### Option 2: Vercel Functions

1. Install Vercel CLI: `npm i -g vercel`
2. In terminal: `cd server && vercel`
3. Follow prompts
4. Add environment variables in Vercel dashboard

### Option 3: Render

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Set build command: `cd server && npm install`
5. Set start command: `cd server && npm start`
6. Add environment variables

## What Data Will Be Stored

Once deployed, your forms will store:

**Contact Forms** → `contacts` collection:
- name, phone, email, subject, message

**Booking Forms** → `bookings` collection:
- name, phone, vehicleType, vehicleBrand, vehicleModel, problem, message

**Signup Forms** → `users` collection:
- name, phone, email, address, aadharNo, mechanicType, password (hashed)

**Shop Inquiries** → `inquiries` collection:
- product_name, name, phone, message

## Quick Test

1. Deploy backend on Railway
2. Get your backend URL
3. Update frontend `getBackendURL()` function
4. Test a contact form
5. Check MongoDB Atlas → Browse Collections → See your data

**Total Time: 15-20 minutes**
