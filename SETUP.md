# Setup Instructions

## Create GitHub Repository and Push Code

Follow these steps to create the repository on GitHub and push your code:

### Step 1: Initialize Git Repository

```bash
cd staff-planning-tracker
git init
git add .
git commit -m "Initial commit: Staff Planning ID Deactivation Tracker"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/chakn005
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `staff-planning-tracker`
   - **Description**: "Web-based dashboard to track ID deactivation status for transitioning staff members"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 3: Push to GitHub

After creating the repository, run these commands:

```bash
git remote add origin https://github.com/chakn005/staff-planning-tracker.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages (Optional)

To host the application on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be published at: `https://chakn005.github.io/staff-planning-tracker/`

### Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
cd staff-planning-tracker
git init
git add .
git commit -m "Initial commit: Staff Planning ID Deactivation Tracker"

# Create repository and push
gh repo create staff-planning-tracker --public --source=. --remote=origin --push

# Enable GitHub Pages
gh repo edit --enable-pages --pages-branch main
```

## Verify Setup

After pushing, verify:

1. Visit https://github.com/chakn005/staff-planning-tracker
2. Check that all files are present
3. If GitHub Pages is enabled, visit https://chakn005.github.io/staff-planning-tracker/

## Troubleshooting

### Authentication Issues

If you encounter authentication issues:

1. **Using HTTPS**: You may need to use a Personal Access Token instead of password
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate a new token with `repo` scope
   - Use the token as your password when prompted

2. **Using SSH**: Set up SSH keys
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # Add the key to your GitHub account
   # Then use SSH URL instead:
   git remote set-url origin git@github.com:chakn005/staff-planning-tracker.git
   ```

### Repository Already Exists

If the repository name is already taken:

```bash
# Remove the remote
git remote remove origin

# Add with a different name
git remote add origin https://github.com/chakn005/staff-planning-tracker-v2.git
git push -u origin main
```

## Next Steps

After successful setup:

1. Update the README.md with your actual GitHub Pages URL
2. Add screenshots to the `screenshots/` folder
3. Customize the staff data in `app.js` with your actual data
4. Share the repository URL with your team

## Support

For issues with Git or GitHub, refer to:
- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
