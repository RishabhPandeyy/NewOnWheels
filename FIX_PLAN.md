# MechWay Backend Error Fix Plan

## Errors Identified

### 1. Admin Key Configuration Error
- **Problem**: Admin panel authentication failing
- **Error**: "Unauthorized" when accessing `/api/admin/submissions`
- **Root Cause**: ADMIN_KEY environment variable not properly configured
- **Impact**: Admin cannot view submitted data

### 2. Payment Gateway Configuration Error  
- **Problem**: Razorpay payment integration not working
- **Error**: "Could not create payment order" 
- **Root Cause**: RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET not configured
- **Impact**: Users cannot make payments

### 3. Legacy Database File Conflict
- **Problem**: Conflicting `server/db.js` file exists
- **Impact**: Potential confusion and unnecessary dependencies

## Fix Implementation Plan

### Step 1: Fix Admin Key Configuration
- [ ] Create proper `.env` file with ADMIN_KEY
- [ ] Test admin panel access
- [ ] Verify submissions endpoint works

### Step 2: Fix Payment Gateway Configuration  
- [ ] Add Razorpay credentials to `.env`
- [ ] Test payment order creation
- [ ] Verify payment signature validation

### Step 3: Clean Up Legacy Files
- [ ] Remove or rename conflicting `server/db.js`
- [ ] Update server documentation
- [ ] Verify no dependency on old database layer

### Step 4: Comprehensive Testing
- [ ] Test all API endpoints
- [ ] Test admin panel functionality  
- [ ] Test payment flow
- [ ] Verify static file serving

### Step 5: Documentation Updates
- [ ] Update README with proper setup instructions
- [ ] Document environment variable requirements
- [ ] Create troubleshooting guide

## Expected Outcomes After Fix
✅ Admin panel accessible with proper key
✅ Payment processing fully functional  
✅ Clean codebase without legacy conflicts
✅ All endpoints working correctly
✅ Complete documentation

## Testing Commands
```bash
# Test admin access
curl -H "x-admin-key: [CONFIG_KEY]" http://localhost:4000/api/admin/submissions

# Test payment creation  
curl -X POST http://localhost:4000/api/create-order -H "Content-Type: application/json" -d '{"amount":100}'

# Test all endpoints
curl http://localhost:4000/api/health
curl -X POST http://localhost:4000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","phone":"123","message":"Hello"}'
