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
