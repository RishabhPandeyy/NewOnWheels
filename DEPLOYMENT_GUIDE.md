# 🚀 MechWay Backend Deployment - STEP BY STEP

## ⚠️ Important Note
I cannot directly deploy to external services (Vercel/Railway) as it requires your account access. However, I've prepared everything to make deployment super easy for you!

## 🎯 Quick Deployment (10 minutes)

### Method 1: Vercel Deployment (Recommended)

#### Step 1: Prepare Repository
Your GitHub repository should already have all the files we need:
- ✅ `server/` directory with all backend code
- ✅ `server/vercel.json` - deployment configuration
- ✅ `server/.env` - environment variables
- ✅ All frontend HTML files

#### Step 2: Deploy to Vercel
1. **Go to**: https://vercel.com
2. **Click**: "Sign In" (use GitHub)
3. **Click**: "New Project"
4. **Select**: Import your MechWay repository
5. **Set**: "Root Directory" = `server`
6. **Click**: "Deploy"

#### Step 3: Add Environment Variables
After deployment, go to your project settings:
1. **Click**: "Settings" tab
2. **Click**: "Environment Variables"
3. **Add these variables**:

```
MONGO_URI=mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0
JWT_SECRET=mOTMcXLaF5i25gTB0uTZ+6f2tyM3XOQfy4p8VLSmNdk=
ADMIN_KEY=mechway_admin_ucQHoRTNXM3DurEVOidScg==
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
```

4. **Click**: "Save"

#### Step 4: Get Your Backend URL
After deployment, Vercel will give you a URL like:
```
https://your-project-name.vercel.app
```

### Method 2: Railway Deployment (Alternative)

#### Step 1: Deploy to Railway
1. **Go to**: https://railway.app
2. **Click**: "Login" (use GitHub)
3. **Click**: "New Project"
4. **Select**: "Deploy from GitHub repo"
5. **Choose**: Your MechWay repository
6. **Set**: Root Directory = `server`
7. **Click**: "Deploy Now"

#### Step 2: Add Environment Variables
1. **Click**: Your project
2. **Click**: "Variables" tab
3. **Add the same environment variables** as above
4. **Deploy** if needed

#### Step 3: Get Your Backend URL
Railway will give you a URL like:
```
https://your-project-name.railway.app
```

## 📱 After Deployment

### Step 1: Update Frontend URLs
Once you have your backend URL, update all frontend files:

```bash
node update-frontend-urls.js https://your-backend-url.vercel.app
```

### Step 2: Test Your Backend
Visit these URLs to test:
```
https://your-backend-url.vercel.app/api/health
```

Should return: `{"ok":true,"timestamp":...}`

### Step 3: Test Form Submission
1. Go to your Vercel frontend site
2. Submit a contact form
3. Check: https://cloud.mongodb.com → Browse Collections → `contacts`

## 🔍 How to Check If It Works

### Backend Health Check
```bash
curl https://your-backend-url.vercel.app/api/health
```

### View Your Data
1. Go to: https://cloud.mongodb.com
2. Click: "Browse Collections"
3. Select: `mechway` database
4. View: `contacts`, `bookings`, `inquiries`, `users` collections

### Admin Panel
```
https://your-backend-url.vercel.app/admin
```

## 🆘 Troubleshooting

### Common Issues:

**1. "Cannot connect to database"**
- Check if MONGO_URI is correct in environment variables
- Ensure MongoDB Atlas cluster is running

**2. "Environment variables not working"**
- Make sure to add them AFTER deployment
- Redeploy after adding environment variables

**3. "Frontend forms not working"**
- Check if you updated the `getBackendURL()` function
- Ensure backend URL is correct

### Need Help?
1. Check the deployment logs in Vercel/Railway
2. Test the `/api/health` endpoint
3. Check your environment variables are set correctly

## ✅ Success Checklist

- [ ] Backend deployed on Vercel/Railway
- [ ] Environment variables added
- [ ] Backend URL noted
- [ ] Frontend URLs updated
- [ ] Health check endpoint working
- [ ] Form submission tested
- [ ] Data visible in MongoDB Atlas

**Once all these are checked, your data storage system is 100% working!**

## 💡 Pro Tips

1. **Keep your backend URL handy** - you'll need it for frontend updates
2. **Test each endpoint** before trusting it
3. **Monitor your MongoDB Atlas** to see incoming data
4. **Bookmark your admin panel** for easy access

---

**Remember**: I can't deploy it for you, but I've made it as simple as possible. Just follow these steps and you'll have working data storage in 10 minutes!
