# Quick Setup Guide

Get the Sphere DSP website running in minutes.

## ⚡ Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Add placeholder images (see below)

# 3. Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) 🚀

## 📸 Required Assets

The website needs these images to display correctly. Add them to `/public/assets/`:

### Logo
- **Filename:** `logo.png`
- **Quick placeholder:** Use any square PNG (200x200px)
- **Final:** Your actual logo with transparency

### Team Photos
- **Filenames:** `person1.png`, `person2.png`, `person3.png`
- **Quick placeholder:** Use any square images (800x800px)
- **Final:** Professional headshots of your team

### Temporary Placeholder Option

If you don't have images yet, create simple placeholders:

```bash
# Create a placeholder script (macOS/Linux)
cd public/assets
convert -size 200x200 xc:gray -fill white -pointsize 40 -gravity center \
  -annotate +0+0 'LOGO' logo.png
convert -size 800x800 xc:lightgray -fill white -pointsize 60 -gravity center \
  -annotate +0+0 'Person 1' person1.png
convert -size 800x800 xc:lightgray -fill white -pointsize 60 -gravity center \
  -annotate +0+0 'Person 2' person2.png
convert -size 800x800 xc:lightgray -fill white -pointsize 60 -gravity center \
  -annotate +0+0 'Person 3' person3.png
```

Or use free placeholder services:
```bash
# Download placeholders using curl
curl "https://via.placeholder.com/200x200/333/fff?text=LOGO" -o logo.png
curl "https://via.placeholder.com/800x800/555/fff?text=Person+1" -o person1.png
curl "https://via.placeholder.com/800x800/555/fff?text=Person+2" -o person2.png
curl "https://via.placeholder.com/800x800/555/fff?text=Person+3" -o person3.png
```

## 🎨 Customize Content

All marketing copy is in `/src/content/`:

1. **Site-wide content** → `site.ts` (nav, footer, home)
2. **Product descriptions** → `products.ts`
3. **Team & mission** → `team.ts`
4. **Tech specs** → `technology.ts`

## 📧 Email Integration (Optional)

To enable forms:

1. **Choose email provider:**
   - [Resend](https://resend.com) (recommended)
   - [SendGrid](https://sendgrid.com)
   - [Mailchimp](https://mailchimp.com)

2. **Get API key** from your provider

3. **Create `.env.local`:**
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

4. **Update API routes:**
   - Edit `/src/app/api/subscribe/route.ts`
   - Edit `/src/app/api/contact/route.ts`
   - Replace TODO comments with actual integration

Forms will work without integration (they'll just log to console).

## 🔍 What to Check

### Homepage (`http://localhost:3000`)
- Hero section with gradient background
- Feature cards
- Products section
- Team teaser (will show once images are added)
- Beta signup form

### Navigation
- Products → Product overview page
- Suite → Suite page
- Technology → Technology & roadmap
- About → Team & mission
- Contact → Contact form

## 🐛 Troubleshooting

### Missing Images Error
```
Error: Image with src "/assets/logo.png" is missing required "width" property
```

**Fix:** Add placeholder images to `/public/assets/` (see above).

### Module Not Found
```bash
rm -rf node_modules .next
pnpm install
```

### TypeScript Errors
Most likely missing React import. Check the file and add:
```typescript
import React from 'react'
```

## 🚀 Next Steps

1. **Add real assets** (logo, team photos)
2. **Customize content** in `/src/content/`
3. **Test all pages** and forms
4. **Set up email integration**
5. **Run production build:** `pnpm build`
6. **Deploy to Vercel** (see DEPLOYMENT.md)

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Deployment guide
- **package.json** - All available scripts

## 💡 Pro Tips

1. **Hot reload:** Changes auto-refresh the browser
2. **Component edits:** Most components have inline comments
3. **Content files:** Edit without touching React code
4. **Dark mode:** Default dark theme (can add light mode toggle)

## 🆘 Need Help?

- Check README.md for detailed docs
- Review component files for inline comments
- All TODOs marked with `// TODO:` comments

---

Happy building! 🎉

