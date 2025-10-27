# ⚠️ IMPORTANT: Next Steps Before Running

The website is fully built and ready to run, but you need to add a few assets first.

## 🚨 CRITICAL: Add Images

The website will have errors without these images. Add them to `/public/assets/`:

### Required Files

```
/public/assets/
  ├── logo.png          ← Company logo (transparent PNG, ~200x200px)
  ├── person1.png       ← Team member 1 photo (square, 800x800px)
  ├── person2.png       ← Team member 2 photo (square, 800x800px)
  └── person3.png       ← Team member 3 photo (square, 800x800px)
```

### Quick Temporary Solution

Use placeholder images to test the site:

```bash
cd public/assets

# Download simple placeholders
curl "https://via.placeholder.com/200x200/333/fff?text=LOGO" -o logo.png
curl "https://via.placeholder.com/800x800/555/fff?text=Person+1" -o person1.png
curl "https://via.placeholder.com/800x800/555/fff?text=Person+2" -o person2.png
curl "https://via.placeholder.com/800x800/555/fff?text=Person+3" -o person3.png
```

## ✅ Then Run

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open http://localhost:3000

## 📝 Customize Content

Edit marketing copy in `/src/content/`:
- `site.ts` - Nav, footer, home page
- `products.ts` - Product descriptions
- `team.ts` - Team info (update names, roles, bios)
- `technology.ts` - Tech specs

## 🚀 Deploy Checklist

Before deploying to production:

1. ✅ Add real logo and team photos
2. ✅ Update content files with actual copy
3. ✅ Set up email integration (see SETUP.md)
4. ✅ Generate favicons from logo (use https://favicon.io/)
5. ✅ Test all forms
6. ✅ Run `pnpm build` to check for errors
7. ✅ Deploy (see DEPLOYMENT.md)

## 📚 Full Documentation

- **SETUP.md** - Quick start guide with details
- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Deployment instructions

---

**Ready?** Add the images above and run `pnpm dev`! 🎉

