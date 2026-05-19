# Create GitHub Repository - Step by Step

## ✅ Git Repository Initialized!

Your local Git repository is ready with all files committed.

## 🚀 Next: Create GitHub Repository

### Step 1: Create Repository on GitHub

1. **Open your browser** and go to: https://github.com/new

2. **Fill in the repository details:**
   - **Repository name**: `staff-planning-tracker`
   - **Description**: `Web-based dashboard to track ID deactivation status for transitioning staff members`
   - **Visibility**: Choose **Public** (recommended) or **Private**
   - **Important**: ❌ **DO NOT** check any of these boxes:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
   
3. **Click** "Create repository"

### Step 2: Push Your Code

After creating the repository, GitHub will show you commands. **Copy and run these commands** in your terminal:

```bash
cd staff-planning-tracker

git remote add origin https://github.com/chakn005/staff-planning-tracker.git
git branch -M main
git push -u origin main
```

**Or run this single command:**

```bash
cd staff-planning-tracker && git remote add origin https://github.com/chakn005/staff-planning-tracker.git && git branch -M main && git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/chakn005/staff-planning-tracker
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-3 minutes for deployment

### 🌐 Your Live Site

After GitHub Pages is enabled, your site will be available at:

**https://chakn005.github.io/staff-planning-tracker/**

---

## 🔐 Authentication

If you're prompted for credentials:

### Option 1: Personal Access Token (Recommended)

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: `staff-planning-tracker`
4. Select scopes: ✅ `repo` (all)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. When prompted for password, **paste the token**

### Option 2: SSH Key

If you prefer SSH:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy the public key
cat ~/.ssh/id_ed25519.pub

# Add to GitHub: https://github.com/settings/keys
# Then use SSH URL:
git remote set-url origin git@github.com:chakn005/staff-planning-tracker.git
git push -u origin main
```

---

## ✅ Verification Checklist

After pushing:

- [ ] Visit https://github.com/chakn005/staff-planning-tracker
- [ ] Verify all 12 files are visible
- [ ] Check README.md displays correctly
- [ ] Enable GitHub Pages in Settings
- [ ] Wait 2-3 minutes
- [ ] Visit https://chakn005.github.io/staff-planning-tracker/
- [ ] Test the application

---

## 🆘 Troubleshooting

### "Repository already exists"

If the name is taken, use a different name:

```bash
git remote add origin https://github.com/chakn005/staff-id-tracker.git
git push -u origin main
```

### "Authentication failed"

- Use Personal Access Token instead of password
- Or set up SSH keys (see above)

### "Permission denied"

- Make sure you're logged into the correct GitHub account
- Check you have permission to create repositories

### Need to start over?

```bash
# Remove the remote
git remote remove origin

# Add the correct one
git remote add origin https://github.com/chakn005/staff-planning-tracker.git
git push -u origin main
```

---

## 📞 Need Help?

If you encounter any issues:

1. Check GitHub's documentation: https://docs.github.com
2. Verify your GitHub username is `chakn005`
3. Make sure you're logged into GitHub
4. Try using a Personal Access Token for authentication

---

## 🎉 Once Complete

Your repository will be live at:
- **Code**: https://github.com/chakn005/staff-planning-tracker
- **Live Site**: https://chakn005.github.io/staff-planning-tracker/

Share the live site URL with your team to start tracking ID deactivations!
