# MechWay Data Storage Setup

## Current Status
- ✅ Frontend deployed on Vercel
- ✅ MongoDB Atlas database ready
- ✅ Backend API code ready

## What You Need to Store User Data

### 1. **Deploy Your Backend API**

Your backend is ready but needs to be deployed. Choose one option:

#### Option A: Vercel Functions (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# In your server directory:
cd server
vercel

# Follow the prompts and deploy
```

#### Option B: Railway (Easy Alternative)
```bash
# Go to railway.app
# Connect your GitHub repo
# Deploy the server/ directory
# Get your backend URL like: https://your-app.railway.app
```

#### Option C: Render
```bash
# Go to render.com
# Create new Web Service
# Connect your repo
# Set build command: cd server && npm install
# Set start command: cd server && npm start
```

### 2. **Update Frontend Configuration**

Your frontend needs to know where to send data. Update the `getBackendURL()` function:

#### In all your HTML files, replace this:
```javascript
const getBackendURL = () => {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return window.location.protocol + '//' + window.location.hostname + ':4000';
    }
    return 'http://127.0.0.1:4000';
};
```

#### With your actual backend URL:
```javascript
const getBackendURL = () => {
    // Replace with your deployed backend URL
    return 'https://your-backend-url.vercel.app'; // or your Railway/Render URL
};
```

### 3. **Environment Variables Setup**

Create a `.env` file in your server directory:
```env
# MongoDB Connection (Keep your current Atlas connection)
MONGO_URI=mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0

# JWT Secret (Generate a random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Admin Key (For admin panel access)
ADMIN_KEY=your_admin_secret_key

# Razorpay (Optional - for payments)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# Server Port
PORT=4000
```

### 4. **Data Flow Architecture**

```
User Form (Vercel Frontend)
        ↓
   POST to API Endpoint
        ↓
    Backend API (Railway/Render/Vercel)
        ↓
    MongoDB Atlas Database
```

### 5. **Forms That Will Store Data**

Your project has these forms that will store user data:

1. **Contact Form** → `/api/contact`
   - Name, Phone, Email, Subject, Message

2. **Booking Form** → `/api/book`
   - Name, Phone, Vehicle Type, Brand, Model, Problem, Message

3. **Signup Form** → `/api/signup`
   - Name, Phone, Email, Address, Aadhar, Password, Mechanic Type

4. **Shop Inquiry** → `/api/inquiry`
   - Product Name, Name, Phone, Message

### 6. **Database Collections**

Your data will be stored in MongoDB Atlas in these collections:

```
mechway database
├── contacts (Contact form submissions)
├── bookings (Service bookings)
├── inquiries (Shop inquiries)
└── users (Registered mechanics)
```

### 7. **Quick Deployment Steps**

#### Step 1: Deploy Backend
```bash
# Choose your platform:

# For Railway:
# 1. Go to railway.app
# 2. New Project → Deploy from GitHub repo
# 3. Select your repo
# 4. Set root directory to 'server'
# 5. Add environment variables
# 6. Deploy

# For Vercel Functions:
cd server
npm install -g vercel
vercel
# Follow prompts and add env vars
```

#### Step 2: Update Frontend URLs
Edit all HTML files and update the `getBackendURL()` function with your backend URL.

#### Step 3: Test Data Storage
1. Submit a contact form on your Vercel site
2. Check MongoDB Atlas → Browse Collections → See your data

### 8. **Admin Panel Access**

Your admin panel will be available at:
```
https://your-backend-url.vercel.app/admin
```

You'll need to set the `x-admin-key` header to access it (use your ADMIN_KEY from .env).

### 9. **Free Hosting Options**

| Platform | Free Tier | Best For |
|----------|-----------|----------|
| **Railway** | $5/month credit | Node.js apps |
| **Render** | Limited free tier | Web services |
| **Vercel Functions** | 100GB bandwidth | Serverless |
| **Heroku** | Limited free | Traditional hosting |

### 10. **Monitoring Your Data**

To view stored data:
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Connect to your cluster
3. Browse collections in the `mechway` database

## Summary

**What you need:**
1. ✅ Deploy backend API (Railway/Render/Vercel)
2. ✅ Set environment variables
3. ✅ Update frontend to point to backend URL
4. ✅ Test form submissions

**Total Cost:** Free (using free tiers) or ~$5-10/month for reliable hosting

**Time to Setup:** 15-30 minutes

Your data storage will work immediately once the backend is deployed!
