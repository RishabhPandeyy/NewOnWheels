#!/bin/bash

# MechWay Backend Deployment Script
# This script sets up everything needed for data storage

echo "🚀 MechWay Backend Deployment Setup"
echo "=================================="

# Step 1: Create environment file
echo "📝 Creating environment configuration..."
cat > server/.env << EOF
# MongoDB Atlas Connection (Keep your existing connection)
MONGO_URI=mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0

# Generate secure secrets
JWT_SECRET=$(openssl rand -base64 32)
ADMIN_KEY=mechway_admin_$(openssl rand -base64 16)

# Razorpay Keys (Optional - add your own keys)
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here

# Server Port
PORT=4000
EOF

echo "✅ Environment file created: server/.env"

# Step 2: Show deployment instructions
echo ""
echo "🔧 Backend Deployment Instructions:"
echo "=================================="
echo ""
echo "Option 1: Vercel Deployment (Recommended)"
echo "----------------------------------------"
echo "1. Go to https://vercel.com and sign in"
echo "2. Click 'New Project'"
echo "3. Import your GitHub repository"
echo "4. Set 'Root Directory' to 'server'"
echo "5. Click 'Deploy'"
echo "6. In project settings, add environment variables:"
echo "   - MONGO_URI: mongodb+srv://rishabhmech:mechucer@cluster0.kdiixo5.mongodb.net/?appName=Cluster0"
echo "   - JWT_SECRET: $(openssl rand -base64 32)"
echo "   - ADMIN_KEY: mechway_admin_$(openssl rand -base64 16)"
echo ""
echo "Option 2: Railway Deployment (Alternative)"
echo "----------------------------------------"
echo "1. Go to https://railway.app and sign in"
echo "2. Click 'New Project' → 'Deploy from GitHub repo'"
echo "3. Select your MechWay repository"
echo "4. Set 'Root Directory' to 'server'"
echo "5. Add environment variables (same as above)"
echo "6. Deploy"
echo ""
echo "After deployment, note your backend URL:"
echo "Vercel: https://your-project.vercel.app"
echo "Railway: https://xyz123.railway.app"
echo ""

# Step 3: Create frontend update script
echo "📱 Creating frontend update script..."
cat > update-frontend-urls.js << 'EOF'
const fs = require('fs');
const path = require('path');

// Get backend URL from command line or prompt
const backendUrl = process.argv[2] || 'https://your-backend-url.vercel.app';

console.log(`🔧 Updating frontend to use backend: ${backendUrl}`);

// Find all HTML files
const htmlFiles = [
    'index.html', 'about.html', 'contact.html', 'shop.html', 
    'service.html', 'book.html', 'Signup.html', 'Login.html',
    'payment.html', 'mechanic.html', 'auth.html', 'zrough.html'
];

const backendUrlFunction = `const getBackendURL = () => {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return '${backendUrl}';
    }
    return 'http://127.0.0.1:4000';
};`;

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace the getBackendURL function
        const regex = /const getBackendURL = \(\) => \{[^}]*\}/;
        content = content.replace(regex, backendUrlFunction);
        
        fs.writeFileSync(file, content);
        console.log(`✅ Updated ${file}`);
    }
});

console.log('');
console.log('🎉 Frontend updated successfully!');
console.log(`Backend URL set to: ${backendUrl}`);
EOF

echo "✅ Frontend update script created: update-frontend-urls.js"

# Step 4: Test script
echo ""
echo "🧪 Testing backend connection..."
cd server && node -e "
const mongoose = require('mongoose');
require('dotenv').config();

console.log('🔍 Testing MongoDB connection...');
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connection successful!');
    process.exit(0);
  })
  .catch(err => {
    console.log('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
"

if [ $? -eq 0 ]; then
    echo "✅ Database connection test passed!"
else
    echo "⚠️  Database connection test failed, but continuing..."
fi

echo ""
echo "🎯 Next Steps:"
echo "============="
echo "1. Deploy backend using Vercel or Railway"
echo "2. Get your backend URL"
echo "3. Run: node update-frontend-urls.js YOUR_BACKEND_URL"
echo "4. Test your forms!"
echo ""
echo "Example:"
echo "node update-frontend-urls.js https://mechway-backend.vercel.app"
echo ""
echo "🔗 Useful Links:"
echo "- Vercel: https://vercel.com"
echo "- Railway: https://railway.app" 
echo "- MongoDB Atlas: https://cloud.mongodb.com"
echo ""
echo "Setup complete! 🚀"
