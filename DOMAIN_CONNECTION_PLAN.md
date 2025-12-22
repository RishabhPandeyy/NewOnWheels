# Domain Connection Plan for https://new-on-wheels.vercel.app/

## Current Analysis
Your MechWay website consists of:
- Frontend: HTML files with JavaScript for API calls
- Backend: Node.js/Express server with MongoDB integration
- Current backend detection: Uses localhost:4000 for local development

## Target Domain
- **Frontend Domain**: https://new-on-wheels.vercel.app/
- **Backend API**: https://new-on-wheels.vercel.app/api/ (served from same domain)

## Plan Overview

### Step 1: Update Frontend Backend URL Configuration
**Issue**: Current `getBackendURL()` function points to `localhost:4000` for production
**Solution**: Update all HTML files to use `https://new-on-wheels.vercel.app` for production

**Files to Update**:
- index.html
- book.html
- contact.html
- mechanic.html
- shop.html
- service.html
- about.html
- Login.html
- Signup.html
- payment.html
- auth.html
- zrough.html

### Step 2: Verify Backend Deployment Configuration
**Current**: Vercel config exists in `server/vercel.json`
**Status**: ✅ Configuration looks correct for Vercel deployment

### Step 3: Update Deployment Script
**Action**: Run the existing `update-frontend-urls.js` script with new domain

### Step 4: Test Connection
**Verification**: Ensure API calls work from frontend to backend on the live domain

## Technical Changes Required

### Frontend JavaScript Update
**Before**:
```javascript
const getBackendURL = () => {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return window.location.protocol + '//' + window.location.hostname + ':4000';
    }
    return 'http://127.0.0.1:4000';
};
```

**After**:
```javascript
const getBackendURL = () => {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return 'https://new-on-wheels.vercel.app';
    }
    return 'http://127.0.0.1:4000';
};
```

## Execution Steps

1. **Update all HTML files** with new backend URL
2. **Verify vercel.json** configuration 
3. **Test locally** with updated URLs
4. **Deploy and verify** on live domain

## Expected Outcome
- Frontend forms will submit to `https://new-on-wheels.vercel.app/api/...`
- Backend will handle requests and store data in MongoDB
- Admin panel accessible at `https://new-on-wheels.vercel.app/admin`

## Potential Issues & Solutions

**Issue**: CORS configuration
**Status**: ✅ Already handled in server.js with `app.use(cors())`

**Issue**: Environment variables on Vercel
**Status**: ✅ Documented in DEPLOYMENT_GUIDE.md

**Issue**: Static file serving
**Status**: ✅ Server configured to serve frontend from parent directory
