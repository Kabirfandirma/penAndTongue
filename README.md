# The Pen & Tongue Academy

A complete, production-ready multi-page Next.js website for The Pen & Tongue Academy — a premier Islamic educational institution in Ibadan, Nigeria.

> **Slogan:** "Connecting Arabic to Your Deen."

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Web3Forms Setup](#web3forms-setup)
- [SEO Configuration](#seo-configuration)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Subtle animations |
| **Lucide React** | Icons (NO emojis) |
| **Web3Forms** | Form handling (no backend) |
| **clsx + tailwind-merge** | Conditional class utilities |

---

## Project Structure

```
pen-and-tongue-academy/
├── app/
│   ├── layout.tsx          # Root layout with metadata, navbar, footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles, Tailwind directives, custom classes
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── courses/
│   │   └── page.tsx        # Courses page
│   ├── register/
│   │   └── page.tsx        # Registration form page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky navbar with scroll effect
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Home hero section
│   ├── CourseCard.tsx      # Reusable course card component
│   ├── SectionWrapper.tsx  # Scroll-reveal animation wrapper
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── BackToTop.tsx       # Back to top button
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/
│   ├── images/             # Image assets
│   ├── robots.txt          # Search engine directives
│   ├── sitemap.xml         # SEO sitemap
│   └── site.webmanifest    # PWA manifest
├── tailwind.config.ts      # Tailwind configuration with brand colors
├── next.config.js          # Next.js config (static export)
├── package.json
├── tsconfig.json
└── postcss.config.js
```

---

## Installation

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn**

### Step 1: Create the Project

```bash
# Option A: Use this code directly
# Copy all files into a new directory
mkdir pen-and-tongue-academy
cd pen-and-tongue-academy

# Option B: Create fresh Next.js project (then replace files)
npx create-next-app@latest pen-and-tongue-academy --typescript --tailwind --eslint --app --no-src-dir
```

### Step 2: Install Dependencies

```bash
cd pen-and-tongue-academy

# Core dependencies
npm install framer-motion lucide-react clsx tailwind-merge

# Dev dependencies (if not already installed)
npm install -D @types/node @types/react @types/react-dom
```

### Step 3: Configure Fonts

The fonts (Poppins and Amiri) are loaded via Google Fonts in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Amiri:wght@400;700&display=swap');
```

No additional setup needed — they load automatically.

---

## Running the Project

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build (Static Export)

```bash
npm run build
```

This generates a static site in the `out/` directory, ready for deployment.

---

## Web3Forms Setup

The registration form uses **Web3Forms** for submission without a backend.

### Step 1: Get Your Access Key

1. Go to [web3forms.com](https://web3forms.com/)
2. Enter your email address
3. Click "Get Access Key"
4. Copy your access key from the email

### Step 2: Update the Code

Open `app/register/page.tsx` and replace:

```typescript
access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
```

With your actual access key:

```typescript
access_key: "your-actual-access-key-here",
```

### Step 3: Test the Form

Submit a test registration to verify emails are received.

### Important Notes

- Web3Forms has a free tier (250 submissions/month)
- The form includes validation for all fields
- Success/error states are handled automatically
- No backend server required

---

## SEO Configuration

### Metadata (Already Configured)

Each page has comprehensive metadata including:
- Title and description
- Open Graph tags
- Twitter cards
- Keywords
- Canonical URLs
- Robots directives

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership (HTML tag method recommended)
4. Copy the verification code
5. Update `layout.tsx`:

```typescript
verification: {
  google: "YOUR_GOOGLE_VERIFICATION_CODE",
},
```

### Google Analytics (Optional)

Add Google Analytics 4 by inserting the tracking script in `app/layout.tsx` inside the `<head>` tag.

### Sitemap

The `public/sitemap.xml` is pre-configured. Update the `lastmod` dates when you make changes.

### robots.txt

Already configured to allow all crawlers. Update the sitemap URL if your domain changes.

---

## Deployment

### Deploy to Vercel (Recommended)

#### Option A: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Option B: GitHub + Vercel Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `out`
6. Click "Deploy"

#### Option C: Manual Upload

```bash
npm run build
# Upload the 'out' folder to Vercel manually
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'out' folder to Netlify
```

### Custom Domain Setup

1. Purchase a domain (e.g., penandtongueacademy.com)
2. In your hosting dashboard, add the custom domain
3. Update DNS records (A record pointing to hosting IP, or CNAME)
4. Update all URLs in:
   - `app/layout.tsx` (metadataBase, canonical URLs)
   - `public/sitemap.xml`
   - `public/robots.txt`

---

## Customization Guide

### Brand Colors

All brand colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: { DEFAULT: "#035F2C", dark: "#024A22", light: "#047A38" },
  accent: { DEFAULT: "#FC8600", dark: "#E07800", light: "#FF9A2B" },
  soft: { DEFAULT: "#AAD64C", dark: "#8FB83A", light: "#BFE06A" },
  background: { DEFAULT: "#CAEECA", dark: "#B0E0B0", light: "#E4F8E4" },
}
```

### Contact Information

Update these across all files:
- Phone number: Search for `+234XXXXXXXXXX`
- Email: Search for `info@penandtongueacademy.com`
- WhatsApp link: Search for `wa.me/234XXXXXXXXXX`
- Address: Search for `Ibadan, Oyo State, Nigeria`

### Images

Replace placeholder areas with actual images:
- Founder photo: `app/about/page.tsx` (Founder section)
- Hero background: Add images to `public/images/`
- OG Image: Create `public/images/og-image.jpg` (1200x630px)

### Courses

Add or modify courses in:
- `app/page.tsx` (featured courses)
- `app/courses/page.tsx` (all courses)
- `app/register/page.tsx` (registration dropdown)

### Google Maps

Replace the placeholder map in:
- `app/about/page.tsx`
- `app/contact/page.tsx`

Get your embed code from Google Maps and replace the placeholder div.

---

## Performance Notes

- **Mobile-first** design throughout
- **Static export** for fast loading
- **Optimized images** (use WebP format)
- **Minimal bundle** (only essential libraries)
- **Semantic HTML** for accessibility
- **Lazy loading** via Framer Motion viewport detection

---

## License

This project is created for The Pen & Tongue Academy. All rights reserved.

---

## Support

For questions or issues:
- Email: info@penandtongueacademy.com
- WhatsApp: +234 XXX XXX XXXX

---

**Built with care for The Pen & Tongue Academy**
*"Connecting Arabic to Your Deen."*
#   p e n A n d T o n g u e  
 