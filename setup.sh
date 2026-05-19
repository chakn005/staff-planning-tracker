#!/bin/bash

# Staff Planning Tracker - GitHub Setup Script
# This script will initialize git and push to GitHub

echo "🚀 Staff Planning Tracker - GitHub Setup"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git repository
echo "📦 Initializing Git repository..."
git init

# Add all files
echo "📝 Adding files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Staff Planning ID Deactivation Tracker

- Interactive dashboard for tracking ID deactivation status
- Filter by name, fleet, vendor, and status
- Real-time statistics and reporting
- Export to CSV functionality
- Responsive design for all devices"

echo ""
echo "✅ Git repository initialized successfully!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to https://github.com/chakn005"
echo "   - Click '+' > 'New repository'"
echo "   - Name: staff-planning-tracker"
echo "   - Description: Web-based dashboard to track ID deactivation status"
echo "   - DO NOT initialize with README, .gitignore, or license"
echo ""
echo "2. After creating the repository, run these commands:"
echo ""
echo "   git remote add origin https://github.com/chakn005/staff-planning-tracker.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. (Optional) Enable GitHub Pages:"
echo "   - Go to repository Settings > Pages"
echo "   - Select 'main' branch as source"
echo "   - Your site will be at: https://chakn005.github.io/staff-planning-tracker/"
echo ""
echo "📖 For detailed instructions, see SETUP.md"
echo ""

# Ask if user wants to continue with GitHub CLI
read -p "Do you have GitHub CLI installed and want to create the repo now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if command -v gh &> /dev/null; then
        echo "🔧 Creating repository with GitHub CLI..."
        gh repo create staff-planning-tracker \
            --public \
            --source=. \
            --remote=origin \
            --description="Web-based dashboard to track ID deactivation status for transitioning staff members" \
            --push
        
        echo ""
        echo "✅ Repository created and code pushed!"
        echo ""
        
        read -p "Enable GitHub Pages? (y/n) " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            gh repo edit --enable-pages --pages-branch main
            echo "✅ GitHub Pages enabled!"
            echo "🌐 Your site will be available at: https://chakn005.github.io/staff-planning-tracker/"
        fi
    else
        echo "❌ GitHub CLI not found. Please install it or follow manual steps above."
    fi
fi

echo ""
echo "🎉 Setup complete! Happy tracking!"
