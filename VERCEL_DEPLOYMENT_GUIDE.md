# 🚀 Backend Deployment Instructions for Vercel

## Step-by-Step Deployment Guide

### Step 1: Prepare Your Vercel Project

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Sign in with your GitHub account

2. **Find Your Project**
   - Look for your `new-on-wheels` project
   - Click on the project to open it

### Step 2: Update Project Configuration

1. **Check Current Settings**
   - Click on "Settings" tab
   - Go to "Functions" or "Build & Output Settings"

2. **Configure Root Directory**
   - **Root Directory**: Set to `server`
   - **Build Command**: `npm run build` (if needed)
   - **Output Directory**: `.` (current directory)

### Step 3: Add Environment Variables

In Vercel dashboard, go to **Settings → Environment Variables** and add:

```
MONGO_URI = mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0
JWT_SECRET = CwKSIP0F/w4W2cYJxkBMoifHpM/b7Fmo5Wrd6wKBa7Q=
ADMIN_KEY = mechway_admin_a+w0Z22amDk0kQO1bTkNhA==
RAZORPAY_KEY_ID = your_razorpay_key_id_here
RAZORPAY_KEY_SECRET = your_razorpay_key_secret_here
PORT = 4000
```

### Step 4: Redeploy

1. **Trigger New Deployment**
   - Go to "Deployments" tab
   - Click "Redeploy" on the latest deployment
   - Or push changes to your GitHub repo (if connected)

### Step 5: Verify Deployment

After deployment completes, test these URLs:

**Health Check**: https://new-on-wheels.vercel.app/api/health  
**Admin Panel**: https://new-on-wheels.vercel.app/admin

## 🔧 Alternative: Fresh Deployment

If the above doesn't work, create a new deployment:

1. **Delete Current Project** (optional)
2. **Create New Project**
   - Click "New Project" on Vercel dashboard
   - Import from GitHub repository
   - Set **Root Directory** to `server`
   - Add environment variables (listed above)
   - Click "Deploy"

## ✅ Success Indicators

**Deployment Successful When**:
- ✅ `/api/health` returns `{"ok":true,"timestamp":...}`
- ✅ `/admin` shows the admin panel
- ✅ Frontend forms submit successfully
- ✅ No 404 errors on API endpoints

## 🚨 Common Issues & Solutions

**Issue**: "Function not found"
**Solution**: Ensure Root Directory is set to `server`

**Issue**: "Environment variables not working"
**Solution**: Redeploy after adding environment variables

**Issue**: "MongoDB connection failed"
**Solution**: Check MONGO_URI is correct and Atlas cluster is active

## 📞 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Test `/api/health` endpoint
4. Ensure GitHub repo has latest code

---

**Ready to Deploy**: All files are prepared and configured for Vercel deployment.
