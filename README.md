# Rohan Kirdak - Premium Portfolio Website 🚀

A world-class, premium, highly animated personal portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Design & UX
- Premium modern UI inspired by Apple, Linear, Vercel
- Glassmorphism UI cards with blur effects
- Smooth Framer Motion animations throughout
- Floating glowing elements
- Mouse-follow gradient glow effects
- Fully responsive (mobile, tablet, desktop)
- Dark/Light mode support
- SEO optimized

### 📑 Sections
1. **Hero Section** - Animated greeting with typing effect
2. **About Section** - Developer journey and statistics
3. **Skills Section** - Organized tech stack with hover effects
4. **Projects Section** - Showcase with live demo links
5. **Experience Section** - Animated timeline
6. **Contact Section** - Beautiful contact form
7. **Blog Section** - MDX-powered blog system
8. **Footer** - Quick navigation and social links

### 🎯 Advanced Features
- GitHub Actions CI/CD pipeline
- Vercel deployment ready
- PostgreSQL + Prisma database
- Contact form backend
- Analytics dashboard UI
- Admin panel structure
- SEO metadata
- Performance optimized

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: PostgreSQL, Prisma ORM
- **Deployment**: Vercel, GitHub Actions
- **Icons**: Lucide React, React Icons
- **Content**: MDX Blog System

## 📁 Folder Structure

```
rohan-portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   ├── sections/            # Page sections
│   ├── animations/          # Framer Motion variants
│   ├── data/               # Portfolio data
│   ├── styles/             # Global styles
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── context/            # Context providers
│   └── lib/                # Library code
├── public/                 # Static assets
├── prisma/                 # Database schema
├── .github/workflows/      # CI/CD pipelines
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rohankirdak/rohan-portfolio.git
cd rohan-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Setup database**
```bash
npx prisma migrate dev
```

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
npm run format          # Format with Prettier
npm run type-check      # Check TypeScript types
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#2563EB',      // Blue
  secondary: '#7C3AED',    // Purple
  accent: '#06B6D4',       // Cyan
}
```

### Update Portfolio Content
Edit `src/data/portfolio.ts`:
- Add/modify projects
- Update skills
- Change experience
- Add testimonials

### Modify Sections
Each section is in `src/sections/`:
- `HeroSection.tsx`
- `ProjectsSkills.tsx`
- `ContactAbout.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect GitHub to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy with one click

### Environment Variables for Vercel
```
DATABASE_URL=your_postgres_url
NEXT_PUBLIC_API_URL=https://your-domain.com/api
```

### Manual Deployment
```bash
npm run build
npm run start
```

## 📊 Database Setup

### Using Vercel Postgres
1. Create Vercel Postgres database
2. Copy connection string
3. Update DATABASE_URL in .env

### Local PostgreSQL
```bash
# Install PostgreSQL
# Create database
createdb rohan_portfolio

# Update .env
DATABASE_URL="postgresql://user:password@localhost:5432/rohan_portfolio"

# Run migrations
npx prisma migrate dev
```

## 🔄 CI/CD Pipeline

GitHub Actions automatically:
- ✅ Runs tests on push
- ✅ Type checks with TypeScript
- ✅ Lints code with ESLint
- ✅ Builds Next.js app
- ✅ Deploys to Vercel (on main branch)

Required GitHub Secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Color contrast compliant

## 🎬 Animation Guidelines

Using Framer Motion:
- `fadeInUp` - Fade up on scroll
- `staggerContainer` - Stagger children
- `hoverScale` - Scale on hover
- `glowHover` - Glow effect on hover
- `floatingAnimation` - Floating elements

## 📞 Contact

- Email: rohan.kirdak@gmail.com
- GitHub: [@rohankirdak](https://github.com/rohankirdak)
- LinkedIn: [Rohan Kirdak](https://linkedin.com)

## 📄 License

MIT License - feel free to use this project as a template

## 🙏 Credits

- Design Inspiration: Awwwards, Dribbble, Behance
- Framework: Next.js
- Animations: Framer Motion
- Styling: Tailwind CSS

---

Built with ❤️ by Rohan Kirdak | 2024
