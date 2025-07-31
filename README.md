# Modern React Website

A beautiful, responsive website built with React, Vite, Tailwind CSS, and React Router. Designed for personal branding with sections for services, blog content, and client engagement.

## 🎯 Features

### 🏠 **Modular Homepage**
- **HeroSection** - Engaging introduction with call-to-action
- **AboutPreview** - Short bio with link to full About page
- **ServicesPreview** - Two-column layout for Fractional Partner + Slow Living Consultancy
- **TheUndoingPreview** - Blog/content preview with CTA
- **SubstackSignup** - Newsletter subscription (Substack ready)
- **PodcastTeaser** - "Coming soon" section for future podcast
- **NewsletterSignup** - Mailchimp integration ready

### 🧭 **Complete Navigation**
- Responsive header with smooth scrolling
- Mobile-friendly hamburger menu
- Active page highlighting
- Six main pages: Home, About, Fractional, Slow Living, The Undoing, Contact

### 📱 **Responsive Design**
- Mobile-first approach with Tailwind CSS
- Custom color palette with deep, rich, accessible colors
- Beautiful typography with Google Fonts
- Smooth animations and hover effects

### 📞 **Contact System**
- Professional contact form (Formspree/Basin compatible)
- Success message handling
- Multiple contact methods display
- Response time expectations

### 🎨 **Custom Design System**
- Rich color palette: primary, secondary, accent, warm, earth, sage
- Custom font families: Inter, Playfair Display, Crimson Text
- Consistent spacing and shadows
- Reusable Tailwind components

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd modern-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🎨 Customization Guide

### 1. **Personal Information**
Update these key files with your information:

**`src/components/Header.jsx`**
```jsx
// Change the logo/name
<Link to="/" className="...">
  Your Name  {/* Replace this */}
</Link>
```

**`src/components/Footer.jsx`**
```jsx
// Update bio and contact info
<h3>Your Name</h3>  {/* Replace this */}
<p>Your bio description...</p>  {/* Replace this */}
```

### 2. **Colors & Branding**
Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your brand colors
    500: '#your-primary-color',
    600: '#your-primary-dark',
    // ... more shades
  },
  // Update other color families
}
```

### 3. **Content Updates**

**Hero Section** (`src/components/HeroSection.jsx`)
- Update main headline and description
- Change call-to-action button text and links

**About Preview** (`src/components/AboutPreview.jsx`)
- Replace placeholder bio content
- Update skills list
- Change quote and attribution

**Services** (`src/components/ServicesPreview.jsx`)
- Customize service descriptions
- Update feature lists
- Modify service URLs

### 4. **Form Integration**

**Contact Form** (`src/pages/Contact.jsx`)
```jsx
// Replace with your Formspree endpoint
<form action="https://formspree.io/f/your-form-id" method="POST">
```

**Newsletter Signups**
- `src/components/SubstackSignup.jsx` - Update Substack URL
- `src/components/NewsletterSignup.jsx` - Update Mailchimp action URL

### 5. **Social Links**
Update social media links in `src/components/Footer.jsx`:

```jsx
const socialLinks = [
  {
    name: 'Substack',
    href: 'https://your-substack.com',  // Update this
    // ...
  },
  // Update other social links
]
```

## 🔧 Advanced Customization

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route to `src/App.jsx`
3. Update navigation in `src/components/Header.jsx` and `src/components/Footer.jsx`

### Custom Components
All components are in `src/components/`. Each is self-contained and reusable.

### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes

## 📱 Deployment

### Replit (Included Configuration)
The project includes `.replit` and `replit.nix` files for seamless Replit deployment:

1. Import project to Replit
2. Run automatically starts development server
3. For production: `npm run build` then `npm run preview`

### Other Platforms

**Vercel**
```bash
npm run build
# Deploy dist/ folder
```

**Netlify**
```bash
npm run build
# Deploy dist/ folder
```

**GitHub Pages**
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📋 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── HeroSection.jsx # Homepage hero
│   ├── AboutPreview.jsx
│   ├── ServicesPreview.jsx
│   ├── TheUndoingPreview.jsx
│   ├── SubstackSignup.jsx
│   ├── PodcastTeaser.jsx
│   └── NewsletterSignup.jsx
├── pages/              # Page components
│   ├── Home.jsx        # Homepage (imports all components)
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact page with form
│   ├── Fractional.jsx  # Fractional partner services
│   ├── SlowLiving.jsx  # Slow living consultancy
│   └── TheUndoing.jsx  # Blog/content page
├── layouts/            # Layout components
│   └── Layout.jsx      # Main layout wrapper
├── data/               # Data files (for future use)
├── utils/              # Utility functions (for future use)
├── App.jsx             # Main app with routing
├── main.jsx            # App entry point
└── index.css           # Global styles + Tailwind
```

## 🎯 Ready-to-Use Features

### Form Endpoints
- **Contact Form**: Formspree/Basin compatible
- **Newsletter**: Mailchimp embed ready
- **Substack**: Newsletter signup ready

### Content Sections
- **Fractional Services**: Business consulting
- **Slow Living**: Lifestyle consultancy  
- **The Undoing**: Blog/content platform
- **Podcast**: Coming soon section

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Accessible color contrast

## 🛠 Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PostCSS** - CSS processing
- **Autoprefixer** - Cross-browser compatibility

## 📝 Content Strategy

### Homepage Flow
1. **Hero** - Immediate value proposition
2. **About Preview** - Build trust and personality
3. **Services** - Clear service offerings
4. **The Undoing** - Showcase thought leadership
5. **Newsletter** - Capture leads
6. **Podcast** - Future content strategy

### SEO Ready
- Semantic HTML structure
- Meta tags ready for customization
- Fast loading times
- Mobile-optimized

## 🤝 Support

For questions about customization or deployment:
1. Check the component documentation in code comments
2. Review Tailwind CSS documentation for styling
3. Test thoroughly before deploying

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to deploy!** This codebase is production-ready and optimized for Replit deployment. Simply customize the content and you're good to go.
