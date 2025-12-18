#!/bin/bash

# Update all HTML files to point to backend URL
# This script updates the getBackendURL() function in all HTML files

echo "🔧 Updating frontend to connect to backend..."

# Find all HTML files and update them
find . -name "*.html" -not -path "./server/*" -type f | while read file; do
    echo "📝 Updating $file"
    
    # Backup original file
    cp "$file" "$file.backup"
    
    # Replace the getBackendURL function
    # This pattern matches the entire function and replaces it
    sed -i '' 's/const getBackendURL = () => {[^}]*return .*;[^}]*}/const getBackendURL = () => {\n    if (window.location.hostname !== '\''localhost'\'' && window.location.hostname !== '\''127.0.0.1'\'') {\n        return '\''https://your-backend-url.railway.app'\''; // Replace with your actual backend URL\n    }\n    return '\''http:\/\/127.0.0.1:4000'\'';\n};/' "$file"
    
    echo "✅ Updated $file"
done

echo ""
echo "🎉 All HTML files updated!"
echo ""
echo "Next steps:"
echo "1. Replace 'https://your-backend-url.railway.app' with your actual backend URL"
echo "2. Deploy your backend on Railway or Vercel Functions"
echo "3. Test form submissions"
echo ""
echo "To restore original files if needed:"
echo "find . -name '*.html.backup' -exec cp {} \$(echo {} | sed 's/.backup//') \;"
