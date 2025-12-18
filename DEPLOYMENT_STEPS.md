# MechWay Data Storage - Step by Step

## What You Have ✅
- ✅ Frontend deployed on Vercel
- ✅ MongoDB Atlas database ready
- ✅ Backend API code ready
- ✅ All necessary configuration files created

## What You Need to Do (15 minutes)

### Step 1: Deploy Backend API

**Choose ONE option:**

#### Option A: Vercel Functions (Easiest - Same platform)
```bash
# In your project root
cd server
npm install -g vercel
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name: mechway-backend
# - Directory: ./
# - Override settings? No

# After deployment, you'll get a URL like:
# https://your-project.vercel.app
```

#### Option B: Railway (Alternative - Also easy)
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select your MechWay repo
5. Set root directory to `server`
6. Add environment variables (see Step 2)
7. Deploy and get URL like: `https://xyz123.railway.app`

### Step 2: Set Environment Variables

In your chosen platform, add these environment variables:

```
MONGO_URI=mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0
JWT_SECRET=your_random_secret_key_here
ADMIN_KEY=your_admin_secret_key
PORT=4000
```

### Step 3: Update Frontend URLs

Replace the backend URL in your HTML files:

**Find this function in all HTML files:**
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
        return 'https://your-backend-url.vercel.app'; // Your actual backend URL
    }
    return 'http://127.0.0.1:4000';
};
```

### Step 4: Test Data Storage

1. Go to your Vercel site
2. Submit a contact form
3. Check [MongoDB Atlas](https://cloud.mongodb.com) → Browse Collections
4. You should see your data in the `contacts` collection

## Forms That Will Store Data

| Form | Data Stored |
|------|-------------|
| Contact Form | name, phone, email, subject, message |
| Booking Form | name, phone, vehicle details, problem |
| Signup Form | mechanic registration data |
| Shop Inquiries | product inquiries |

## Admin Panel

Access at: `https://your-backend-url.vercel.app/admin`

Use your `ADMIN_KEY` to view all submissions.

## Files Created for You

- ✅ `server/vercel.json` - Vercel deployment config
- ✅ `server/.env.example` - Environment variables template
- ✅ `update-frontend.sh` - Script to update all HTML files

## Quick Commands

**To update all HTML files at once:**
```bash
./update-frontend.sh
```

**Then manually replace the placeholder URL with your actual backend URL.**

## Cost
- **Vercel Functions**: Free tier available
- **Railway**: $5/month credit (free for small usage)
- **MongoDB Atlas**: Free tier available

**Total: $0/month to start**

## That's It!

Your user data will be automatically stored in MongoDB Atlas once you complete these steps. The setup takes about 15 minutes and everything works immediately.
