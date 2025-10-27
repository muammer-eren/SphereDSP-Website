# Sphere DSP Marketing Website

A production-grade marketing website for Sphere DSP - precision audio plugins with an AI copilot.

Built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
spheredsp/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/        # Marketing pages
│   │   │   ├── page.tsx        # Home
│   │   │   ├── products/       # Products pages
│   │   │   ├── suite/          # Suite page
│   │   │   ├── technology/     # Technology page
│   │   │   ├── about/          # About page
│   │   │   ├── contact/        # Contact page
│   │   │   └── legal/          # Legal pages
│   │   ├── api/                # API routes
│   │   │   ├── subscribe/      # Newsletter subscription
│   │   │   └── contact/        # Contact form
│   │   ├── layout.tsx          # Root layout
│   │   ├── robots.ts           # Robots.txt
│   │   └── sitemap.ts          # Sitemap
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── header.tsx          # Site header
│   │   ├── footer.tsx          # Site footer
│   │   └── ...                 # Other components
│   ├── content/                # Marketing content
│   │   ├── site.ts             # Site-wide content
│   │   ├── products.ts         # Product descriptions
│   │   ├── team.ts             # Team information
│   │   └── technology.ts       # Technology content
│   ├── lib/                    # Utilities
│   │   ├── utils.ts            # General utilities
│   │   ├── motion.ts           # Framer Motion variants
│   │   └── seo.ts              # SEO utilities
│   └── styles/
│       └── globals.css         # Global styles
├── public/
│   └── assets/                 # Static assets
│       ├── logo.png            # Logo (required)
│       ├── person1.png         # Team photo 1 (required)
│       ├── person2.png         # Team photo 2 (required)
│       └── person3.png         # Team photo 3 (required)
├── tailwind.config.ts          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json
```

## 🎨 Design System

### Colors

- **Background (dark):** `#0B0B0F`
- **Surface:** `#111318`
- **Accent gradient:** `#9AE6FF → #B8A2FF`
- **Text primary:** `#FFFFFF`
- **Text secondary:** `#A9B0C0`
- **Success/CTA:** `#7AE582`

### Typography

- **Font:** Inter (via next/font)
- **Line height:** 1.2 for headlines
- **Tracking:** Tighter for headlines

## 🖼️ Assets

### Required Images

Place these images in `/public/assets/`:

1. **logo.png** - Company logo (transparent PNG, ~200x200px recommended)
2. **person1.png** - Team member 1 photo (square, 800x800px recommended)
3. **person2.png** - Team member 2 photo (square, 800x800px recommended)
4. **person3.png** - Team member 3 photo (square, 800x800px recommended)

### Favicon & Icons

Generate from your logo:

- `favicon.ico` (32x32)
- `favicon-16x16.png`
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

Tools: [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)

## 📝 Content Management

All marketing copy is centralized in `/src/content/` for easy editing:

- `site.ts` - Navigation, footer, home page
- `products.ts` - Product descriptions and features
- `team.ts` - Team members and company info
- `technology.ts` - Technical specifications and roadmap

## 🔌 API Integration

### Email & Forms

The site includes placeholder API routes. Integrate with your email service:

#### Newsletter Subscription (`/api/subscribe`)

Integrate with:
- [Resend](https://resend.com/docs)
- [SendGrid](https://docs.sendgrid.com/)
- [Mailchimp](https://mailchimp.com/developer/)
- [ConvertKit](https://developers.convertkit.com/)

#### Contact Form (`/api/contact`)

Integrate with:
- [Resend](https://resend.com/) (send emails)
- [Supabase](https://supabase.com/) (store in database)
- [Notion API](https://developers.notion.com/) (create support tickets)

### Environment Variables

Create a `.env.local` file:

```bash
# Email service (example with Resend)
RESEND_API_KEY=your_api_key_here
RESEND_AUDIENCE_ID=your_audience_id

# Or with SendGrid
# SENDGRID_API_KEY=your_api_key
```

See `.env.example` for reference.

## 🎭 Animations

Powered by Framer Motion with:
- Scroll-triggered reveals
- Staggered animations
- Parallax effects
- Respects `prefers-reduced-motion`

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA landmarks
- Keyboard navigation
- Focus indicators
- Skip-to-content link

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/spheredsp)

### Other Platforms

Also works with:
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- Any Node.js hosting

## 🔧 Development

### Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
```

### Code Quality

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type safety
- **Husky** - Pre-commit hooks (run `pnpm prepare`)

## 📊 Performance

Target: Lighthouse score ≥95 on all metrics

Optimizations:
- Next.js Image optimization
- Font optimization with `next/font`
- Tree-shaking
- Code splitting
- Lazy loading

## 🧪 Testing

Add tests with:

```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom
```

## 📄 License

Proprietary - © 2025 Sphere DSP. All rights reserved.

## 🤝 Support

- **Email:** hello@spheredsp.com
- **Website:** https://spheredsp.com

---

Built with ❤️ by the Sphere DSP team.

