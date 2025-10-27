# Deployment Guide

This guide covers deploying the Sphere DSP marketing website to production.

## Pre-Deployment Checklist

### 1. Assets
- [ ] Add `logo.png` to `/public/assets/`
- [ ] Add team photos (`person1.png`, `person2.png`, `person3.png`) to `/public/assets/`
- [ ] Generate favicons from logo (use [favicon.io](https://favicon.io/))
- [ ] Add `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` to `/public/`

### 2. Content Review
- [ ] Review all copy in `/src/content/`
- [ ] Update team member information in `team.ts`
- [ ] Verify product descriptions in `products.ts`
- [ ] Check roadmap dates in `technology.ts`

### 3. API Integration
- [ ] Set up email service (Resend, SendGrid, etc.)
- [ ] Configure environment variables
- [ ] Test newsletter subscription
- [ ] Test contact form
- [ ] Update TODO comments in API routes

### 4. SEO & Social
- [ ] Update canonical URL in `src/lib/seo.ts`
- [ ] Generate Open Graph images
- [ ] Test meta tags with [metatags.io](https://metatags.io/)
- [ ] Verify sitemap.xml is accessible
- [ ] Check robots.txt

### 5. Testing
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Run Lighthouse audit (aim for 95+ on all metrics)
- [ ] Test all forms
- [ ] Verify all links work

## Netlify Deployment

### Quick Deploy

1. **Go to Netlify:** https://app.netlify.com/
2. **Add new site** → Import an existing project
3. **Choose GitHub** (authorize if needed)
4. **Select repository:** `muammer-eren/SphereDSP-Website`
5. **Configure build settings:**
   - **Branch to deploy:** `main` (or `master`)
   - **Build command:** `pnpm install && pnpm build`
   - **Publish directory:** `.next`
6. **Click "Deploy site"**

Build time: ~3-5 minutes

### Fix "No Branch Found" Error

If Netlify shows "no branch found":

**Solution 1: Manual branch input**
- Type `main` manually in the "Branch to deploy" field
- Don't rely on the dropdown

**Solution 2: Verify repository access**
1. Netlify → User Settings → Applications
2. Find GitHub → Configure
3. Ensure `SphereDSP-Website` has access
4. Refresh and try again

**Solution 3: Create master branch** (already done)
```bash
git checkout -b master
git push -u origin master
git checkout main
```

Both `main` and `master` branches are now available.

### Netlify Configuration

The repository includes `netlify.toml`:

```toml
[build]
  command = "pnpm install && pnpm build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

### Alternative: Netlify CLI

```bash
npm i -g netlify-cli
cd /Users/muammereren/Desktop/SphereDSP
netlify deploy --prod
```

## Vercel Deployment (Recommended for Next.js)

### Initial Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/spheredsp-website.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel dashboard → Settings → Environment Variables
   - Add all variables from `.env.example`
   - Add for Production, Preview, and Development environments

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

### Custom Domain

1. **Add Domain in Vercel**
   - Project Settings → Domains
   - Add `spheredsp.com` and `www.spheredsp.com`

2. **Update DNS Records**
   At your domain registrar, add:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Update Canonical URLs**
   Ensure `https://spheredsp.com` is set in:
   - `src/lib/seo.ts` → `siteConfig.url`
   - `src/app/layout.tsx` → canonical link
   - `src/app/sitemap.ts` → `baseUrl`

### Post-Deployment

1. **Verify Deployment**
   - Check homepage loads
   - Test all navigation links
   - Submit forms
   - Check Lighthouse score

2. **Monitor**
   - Vercel Analytics (built-in)
   - Add Google Analytics or Plausible (optional)
   - Set up error monitoring (Sentry, optional)

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Verify HTTPS is working

## Alternative: Netlify

1. **Create Netlify Site**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `.next`

3. **Environment Variables**
   - Site Settings → Build & Deploy → Environment
   - Add all variables from `.env.example`

## Alternative: Self-Hosted (VPS)

### Requirements
- Node.js 18+ or 20+
- PM2 for process management
- Nginx for reverse proxy

### Setup

1. **Build Locally**
   ```bash
   pnpm build
   ```

2. **Upload Files**
   Upload these directories to server:
   - `.next/`
   - `public/`
   - `node_modules/`
   - `package.json`
   - `next.config.js`

3. **Start with PM2**
   ```bash
   pm2 start npm --name "spheredsp" -- start
   pm2 save
   pm2 startup
   ```

4. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name spheredsp.com www.spheredsp.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **SSL with Let's Encrypt**
   ```bash
   certbot --nginx -d spheredsp.com -d www.spheredsp.com
   ```

## Performance Optimization

### After Deployment

1. **Enable Caching**
   - Vercel does this automatically
   - For self-hosted, configure Nginx caching

2. **Image Optimization**
   - Next.js handles this via `next/image`
   - Ensure images are optimized before upload

3. **CDN**
   - Vercel includes CDN
   - For self-hosted, consider Cloudflare

4. **Monitor Performance**
   - Use Vercel Analytics
   - Monitor Core Web Vitals
   - Regular Lighthouse audits

## Troubleshooting

### Build Fails

**"Module not found"**
```bash
rm -rf node_modules .next
pnpm install
pnpm build
```

**TypeScript Errors**
- Check all files for type errors
- Run `pnpm build` locally first

### Runtime Errors

**"Cannot read property of undefined"**
- Check environment variables are set
- Verify API routes have correct error handling

**Images Not Loading**
- Verify images exist in `/public/assets/`
- Check Next.js Image configuration in `next.config.js`

### Form Submission Issues

**Forms Not Working**
- Check API routes are deployed
- Verify environment variables for email service
- Check browser console for errors

## Rollback

### Vercel
- Deployments → Select previous deployment → Promote to Production

### Netlify
- Deploys → Find successful deploy → Publish deploy

### Self-Hosted
```bash
pm2 stop spheredsp
# Restore previous .next directory
pm2 start spheredsp
```

## Continuous Deployment

### Automatic Deploys
- Vercel/Netlify auto-deploy on `git push` to main branch
- Preview deployments for pull requests

### Branch Strategy
```
main → production (spheredsp.com)
staging → preview (staging.spheredsp.com)
feature/* → preview deployments
```

## Support

For deployment issues:
- Vercel: https://vercel.com/support
- Netlify: https://www.netlify.com/support/
- GitHub Issues: [Your repo]/issues

---

Happy deploying! 🚀

