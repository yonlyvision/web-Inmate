# Deployment Guide

This document provides instructions for deploying the INM8TE website to various hosting platforms.

## Prerequisites

- Node.js v14 or higher installed
- npm or yarn package manager
- Git installed and configured

## Build the Project

Before deploying, create a production build:

```bash
npm install
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment with automatic CI/CD:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

**Or use Vercel's GitHub integration:**
- Connect your GitHub repository to Vercel
- Vercel will automatically deploy on every push to main

### 2. Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

**Or use Netlify's drag-and-drop:**
- Build the project locally: `npm run build`
- Drag the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

### 3. GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yonlyvision.github.io/web-Inmate",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Create an S3 bucket with static website hosting enabled
3. Upload the `build` folder contents to the bucket
4. (Optional) Set up CloudFront for CDN and HTTPS

### 5. Docker

Build and run with Docker:

```bash
docker build -t inm8te-website .
docker run -p 3000:80 inm8te-website
```

## Environment Variables

For production, set environment variables:

- Copy `.env.example` to `.env.production`
- Update values for production environment
- Never commit `.env` files to version control

## Post-Deployment Checklist

- [ ] Test all routes and navigation
- [ ] Verify responsive design on mobile devices
- [ ] Check page load times and performance
- [ ] Test forms and interactive elements
- [ ] Verify meta tags and SEO
- [ ] Set up analytics (if configured)
- [ ] Enable HTTPS/SSL
- [ ] Configure custom domain (if applicable)

## Continuous Deployment

For automated deployments, connect your repository to your hosting platform:

1. **Vercel/Netlify**: Automatic deployment on push to main branch
2. **GitHub Actions**: Create workflow files for custom CI/CD

## Monitoring

Consider setting up:
- Error tracking (e.g., Sentry)
- Analytics (e.g., Google Analytics, Plausible)
- Uptime monitoring
- Performance monitoring

## Support

For deployment issues, check:
- Platform-specific documentation
- Project GitHub issues
- Community forums
