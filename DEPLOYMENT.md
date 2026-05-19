# Deployment Guide

## Quick Deploy to GitHub

### Option 1: Automated Setup (Recommended)

Run the setup script:

```bash
cd staff-planning-tracker
./setup.sh
```

The script will:
1. Initialize Git repository
2. Create initial commit
3. Guide you through creating GitHub repository
4. Optionally push code using GitHub CLI

### Option 2: Manual Setup

#### Step 1: Initialize Git

```bash
cd staff-planning-tracker
git init
git add .
git commit -m "Initial commit: Staff Planning ID Deactivation Tracker"
```

#### Step 2: Create GitHub Repository

1. Visit https://github.com/new
2. Repository name: `staff-planning-tracker`
3. Description: `Web-based dashboard to track ID deactivation status for transitioning staff members`
4. Choose Public or Private
5. **DO NOT** check "Initialize this repository with a README"
6. Click "Create repository"

#### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/chakn005/staff-planning-tracker.git
git branch -M main
git push -u origin main
```

#### Step 4: Enable GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select branch: `main`
4. Click "Save"
5. Wait a few minutes for deployment
6. Access your site at: `https://chakn005.github.io/staff-planning-tracker/`

## Alternative Deployment Options

### Deploy to Netlify

1. Push code to GitHub (follow steps above)
2. Go to https://app.netlify.com
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select `staff-planning-tracker`
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.`
6. Click "Deploy site"

### Deploy to Vercel

1. Push code to GitHub (follow steps above)
2. Go to https://vercel.com
3. Click "Add New" > "Project"
4. Import `staff-planning-tracker` repository
5. Click "Deploy"

### Deploy to GitHub Codespaces

1. Push code to GitHub
2. Click "Code" > "Codespaces" > "Create codespace on main"
3. In the terminal, run:
   ```bash
   python -m http.server 8000
   ```
4. Click "Open in Browser" when prompted

## Local Development

### Using Python

```bash
cd staff-planning-tracker
python -m http.server 8000
# Visit http://localhost:8000
```

### Using Node.js

```bash
cd staff-planning-tracker
npx http-server
# Visit http://localhost:8080
```

### Using PHP

```bash
cd staff-planning-tracker
php -S localhost:8000
# Visit http://localhost:8000
```

### Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## Environment Configuration

### Custom Domain (GitHub Pages)

1. Add a `CNAME` file with your domain:
   ```bash
   echo "stafftracker.yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Configure DNS:
   - Add CNAME record pointing to `chakn005.github.io`
   - Wait for DNS propagation

3. In GitHub repository settings:
   - Go to Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Updating the Application

### Push Updates

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically redeploy.

### Rollback to Previous Version

```bash
# View commit history
git log --oneline

# Rollback to specific commit
git revert <commit-hash>
git push origin main
```

## Monitoring and Analytics

### Add Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Monitor with GitHub Insights

- Go to repository > Insights > Traffic
- View page views and visitor statistics

## Security Considerations

### For Public Repositories

- ✅ No sensitive data in code
- ✅ All data stored in browser localStorage
- ✅ No API keys or credentials
- ✅ Static files only

### For Private Repositories

- Enable branch protection rules
- Require pull request reviews
- Enable security alerts

## Troubleshooting

### GitHub Pages Not Working

1. Check repository settings > Pages
2. Ensure branch is set to `main`
3. Wait 5-10 minutes for initial deployment
4. Check for build errors in Actions tab

### Changes Not Appearing

1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check if changes were pushed: `git log`
3. Wait a few minutes for GitHub Pages to rebuild

### 404 Error

1. Ensure `index.html` is in root directory
2. Check file names are correct (case-sensitive)
3. Verify GitHub Pages is enabled

## Performance Optimization

### Enable Caching

Add `.htaccess` for Apache servers:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

### Minify Files

For production, consider minifying:

```bash
# Install minification tools
npm install -g html-minifier clean-css-cli uglify-js

# Minify files
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
cleancss -o styles.min.css styles.css
uglifyjs app.js -o app.min.js
```

## Backup and Recovery

### Backup Data

Users' data is stored in browser localStorage. To backup:

1. Open browser console (F12)
2. Run: `localStorage.getItem('staffPlanningData')`
3. Copy the JSON output
4. Save to a file

### Restore Data

1. Open browser console
2. Run: `localStorage.setItem('staffPlanningData', 'PASTE_JSON_HERE')`
3. Refresh the page

## Support

For deployment issues:
- GitHub Pages: https://docs.github.com/pages
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs

For application issues:
- Open an issue: https://github.com/chakn005/staff-planning-tracker/issues
