# Quick Start Guide

## 🚀 Deploy in 3 Steps

### Step 1: Navigate to Project
```bash
cd staff-planning-tracker
```

### Step 2: Run Setup
```bash
./setup.sh
```

### Step 3: Create GitHub Repo
Follow the prompts or manually:
1. Go to https://github.com/new
2. Name: `staff-planning-tracker`
3. Click "Create repository"
4. Run:
```bash
git remote add origin https://github.com/chakn005/staff-planning-tracker.git
git branch -M main
git push -u origin main
```

## 🌐 Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Select branch: `main`
4. Click "Save"
5. Visit: `https://chakn005.github.io/staff-planning-tracker/`

## 📝 Quick Commands

### View Locally
```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx http-server

# Then open: http://localhost:8000
```

### Update & Deploy
```bash
git add .
git commit -m "Your changes"
git push origin main
```

### Export Data
Click "Export to CSV" button in the app

## 🎯 Key Features

- **Track Status**: Pending → In Progress → Completed
- **Filter**: By name, fleet, vendor, status
- **Export**: Download CSV reports
- **Auto-save**: Changes saved automatically

## 📊 Dashboard Stats

- Total Staff (X): All with transition status "x"
- Pending: Not yet submitted
- In Progress: Being processed
- Completed: Successfully deactivated

## 🔧 Quick Customization

### Add Staff Member
Edit `app.js`, add to `staffData` array:
```javascript
{
    name: "Name",
    fleet: "Fleet",
    application: "App",
    role: "Role",
    vendor: "Vendor",
    rank: "0",
    transition: "x",
    endDate: "12/31/26",
    manager: "Manager",
    idStatus: "Pending",
    submittedBy: ""
}
```

### Change Colors
Edit `styles.css`:
- Line 82-85: Status card colors
- Line 145-155: Badge colors

## 📱 Access

- **Local**: `http://localhost:8000`
- **GitHub Pages**: `https://chakn005.github.io/staff-planning-tracker/`
- **Custom Domain**: Configure in GitHub Settings

## 🆘 Troubleshooting

### Setup Script Won't Run
```bash
chmod +x setup.sh
./setup.sh
```

### GitHub Pages 404
- Wait 5-10 minutes after first push
- Check Settings > Pages is enabled
- Verify `index.html` is in root directory

### Changes Not Showing
- Clear browser cache (Ctrl+Shift+R)
- Wait 2-3 minutes for GitHub Pages rebuild
- Check git push was successful

### Data Lost
- Data is in browser localStorage
- Export to CSV regularly
- Use same browser to access

## 📚 More Help

- **Full Documentation**: See `README.md`
- **Setup Details**: See `SETUP.md`
- **Deployment Options**: See `DEPLOYMENT.md`
- **Project Overview**: See `PROJECT_SUMMARY.md`

## ✅ Checklist

- [ ] Navigate to project directory
- [ ] Run `./setup.sh`
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Enable GitHub Pages
- [ ] Test the live site
- [ ] Customize staff data
- [ ] Share with team

## 🎉 You're Done!

Your Staff Planning Tracker is now live and ready to use!

**Live URL**: `https://chakn005.github.io/staff-planning-tracker/`

---

Need help? Check the other documentation files or open an issue on GitHub.
