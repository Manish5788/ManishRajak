# 🚀 Netlify Deployment Guide - Manish Kumar Rajak Portfolio

This guide provides comprehensive instructions for deploying your professional portfolio to Netlify.

## 📋 Prerequisites

- GitHub repository: `https://github.com/Manish5788/ManishRajak.git`
- Netlify account (free): `https://app.netlify.com/`
- Node.js 18+ installed locally (for testing)

## 🎯 Quick Deployment (Recommended)

### Method 1: Direct GitHub Integration

1. **Visit Netlify Dashboard**
   ```
   https://app.netlify.com/
   ```

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with Git"
   - Select "GitHub" as your Git provider

3. **Repository Selection**
   - Search for: `ManishRajak`
   - Select: `Manish5788/ManishRajak`

4. **Build Configuration**
   ```
   Base directory: frontend
   Build command: yarn build
   Publish directory: frontend/build
   ```

5. **Environment Variables** (Add in Netlify Dashboard → Site settings → Environment variables)
   ```
   REACT_APP_BACKEND_URL = https://your-backend-url.herokuapp.com
   NODE_VERSION = 18
   YARN_VERSION = 1.22.19
   ```

6. **Deploy**
   - Click "Deploy site"
   - Wait for build completion (usually 2-3 minutes)

## 🛠️ Manual Deployment Method

### Step 1: Local Build Preparation

```bash
# Navigate to your project
cd /path/to/ManishRajak

# Run the deployment preparation script
./deploy-netlify.sh
```

### Step 2: Manual Upload

1. **Build Locally**
   ```bash
   cd frontend
   yarn install
   yarn build
   ```

2. **Upload to Netlify**
   - Go to https://app.netlify.com/
   - Drag and drop the `frontend/build` folder to Netlify
   - Site will be live immediately

## 🔧 Advanced Configuration

### Custom Domain Setup

1. **Purchase Domain** (optional)
   - Buy from Namecheap, GoDaddy, or use Netlify domains

2. **Configure DNS**
   - In Netlify: Site settings → Domain management
   - Add custom domain: `manishrajak.com`
   - Update DNS records as instructed

### Performance Optimization

The deployment includes automatic optimizations:
- ✅ **Gzip compression** enabled
- ✅ **Browser caching** configured
- ✅ **CDN distribution** worldwide
- ✅ **HTTPS** automatically enabled
- ✅ **Security headers** added

### Environment Variables Configuration

Required environment variables for production:

```env
# Backend API URL (deploy backend separately)
REACT_APP_BACKEND_URL=https://your-backend-api.herokuapp.com

# Site URL for SEO
REACT_APP_SITE_URL=https://manishrajak.netlify.app

# Analytics (optional)
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

## 🗄️ Backend Deployment (Separate)

Since Netlify hosts static sites, deploy your FastAPI backend separately:

### Option 1: Heroku (Recommended)
```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create new app
heroku create manish-portfolio-api

# Deploy backend
git subtree push --prefix backend heroku main
```

### Option 2: Railway
```bash
# Connect to Railway
railway login
railway init
railway up
```

### Option 3: DigitalOcean App Platform
- Upload backend folder
- Configure Python environment
- Set MongoDB connection string

## 📱 Testing Your Deployment

### Pre-deployment Checklist
- [ ] All images load correctly
- [ ] Navigation works smoothly
- [ ] Contact form displays (backend integration separate)
- [ ] Mobile responsive design
- [ ] Fast loading times
- [ ] SEO meta tags present

### Post-deployment Testing
```bash
# Test your deployed site
curl -I https://your-site-name.netlify.app

# Check performance
https://pagespeed.web.dev/
https://gtmetrix.com/
```

## 🚨 Troubleshooting

### Common Issues & Solutions

**Build Failed:**
```bash
# Check Node version
node --version  # Should be 18+

# Clear cache and rebuild
rm -rf node_modules package-lock.json
yarn install
yarn build
```

**Routing Issues:**
- Ensure `_redirects` file is in `public/` folder
- Check netlify.toml configuration

**Environment Variables Not Working:**
- Variables must start with `REACT_APP_`
- Set in Netlify dashboard, not in code
- Redeploy after adding variables

**Slow Loading:**
- Images should be optimized
- Check bundle size: `yarn analyze`
- Enable all performance headers

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)
1. Create GA4 property
2. Add tracking ID to environment variables
3. Update React app to include analytics

### Performance Monitoring
- Use Netlify Analytics (paid)
- Google PageSpeed Insights
- GTmetrix for performance monitoring

## 🔄 Continuous Deployment

Once connected to GitHub:
- ✅ **Auto-deploy** on push to main branch
- ✅ **Preview deployments** for pull requests
- ✅ **Rollback** capability to previous versions
- ✅ **Branch deployments** for testing

## 🌐 Custom Domain Setup (Optional)

### Using Netlify Domain
```
https://manishrajak.netlify.app (Free)
```

### Using Custom Domain
1. **Purchase domain**
2. **In Netlify Dashboard:**
   - Site settings → Domain management
   - Add custom domain
   - Follow DNS configuration instructions
3. **Result:** `https://manishrajak.com`

## 📋 Deployment Checklist

### Before Deployment
- [ ] Code tested locally
- [ ] Build runs without errors
- [ ] All images optimized
- [ ] Environment variables configured
- [ ] netlify.toml file present
- [ ] _redirects file in public folder

### After Deployment
- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms work (if backend connected)
- [ ] Mobile responsive
- [ ] Fast loading times
- [ ] SEO tags present
- [ ] Analytics configured (optional)

## 🎉 Success!

Your portfolio should now be live at:
```
https://your-site-name.netlify.app
```

**Example URLs:**
- `https://manishrajak.netlify.app`
- `https://manish-kumar-portfolio.netlify.app`

## 📞 Support

If you encounter issues:
1. Check Netlify build logs
2. Review this deployment guide
3. Check GitHub repository settings
4. Contact: mani.rajak007@gmail.com

---

**🚀 Your professional SAP consultant portfolio is now live and accessible worldwide!**

Built with ❤️ for professional success by Manish Kumar Rajak