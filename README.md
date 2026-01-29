# 6 Independent Portfolio Sites

This repository contains **6 separate, independent portfolio sites**, each showcasing different design aesthetics and UI/UX principles.

## 📁 Project Structure

```
Antigravity_input/
├── profiles/                    # JSON data files (already updated with UI/UX skills)
│   ├── profile1.json           # Rohan Deshmukh - UI/UX Designer
│   ├── profile2.json           # Sarah Jenkins - Marketing Manager
│   └── profile3.json           # Zainab Ali - Data Scientist
├── shared/                      # Shared components & design system
│   ├── components/             # Reusable React components
│   └── index.css               # Global design system
├── site-1-minimalist-bold/      # Site 1: Minimalist Bold (profile1)
├── site-2-gradient-modern/      # Site 2: Gradient Modern (profile1)
├── site-3-professional-dark/    # Site 3: Professional Dark (profile2)
├── site-4-glassmorphism-light/  # Site 4: Glassmorphism Light (profile2)
├── site-5-modern-tech/          # Site 5: Modern Tech (profile3)
└── site-6-brutalist-bold/       # Site 6: Brutalist Bold (profile3)
```

## 🎨 Site Variations

| Site | Profile | Design Theme | Color Palette | Key Features |
|------|---------|--------------|---------------|--------------|
| **Site 1** | Rohan (UI/UX) | Minimalist Bold | Yellow/Black | High contrast, bold typography |
| **Site 2** | Rohan (UI/UX) | Gradient Modern | Teal/Purple/Pink | Vibrant gradients, glassmorphic cards |
| **Site 3** | Sarah (Marketing) | Professional Dark | Dark (#0A0A0A) | Sophisticated, minimal animations |
| **Site 4** | Sarah (Marketing) | Glassmorphism Light | Light Blue/White | Frosted glass effects, elegant |
| **Site 5** | Zainab (Data Science) | Modern Tech | Navy/Purple/Magenta | Parallax scrolling, dynamic animations |
| **Site 6** | Zainab (Data Science) | Brutalist Bold | Red/Black/White | Sharp edges, stark borders, raw aesthetic |

## 🚀 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Running a Single Site

```bash
# Navigate to any site folder
cd site-1-minimalist-bold

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:5173
```

### Running All Sites (Different Ports)

```bash
# Terminal 1 - Site 1
cd site-1-minimalist-bold && npm install && npm run dev

# Terminal 2 - Site 2 (will auto-assign different port)
cd site-2-gradient-modern && npm install && npm run dev

# Repeat for sites 3-6...
```

## 📦 Building for Production

```bash
# Navigate to site folder
cd site-1-minimalist-bold

# Build
npm run build

# Output will be in dist/ folder
```

## ☁️ Cloud Pages Deployment

### Option 1: Monorepo Deployment (Recommended)

1. **Push to GitLab**:
```bash
# From Antigravity_input/ root
git add .
git commit -m "Add 6 independent portfolio sites"
git push origin your-branch-name
```

2. **Create 6 Cloud Pages Projects** (in Cloudflare Dashboard):

**Site 1:**
- Project Name: `portfolio-site-1`
- Build Command: `cd site-1-minimalist-bold && npm install && npm run build`
- Build Output: `site-1-minimalist-bold/dist`

**Site 2:**
- Project Name: `portfolio-site-2`
- Build Command: `cd site-2-gradient-modern && npm install && npm run build`
- Build Output: `site-2-gradient-modern/dist`

**Site 3:**
- Project Name: `portfolio-site-3`
- Build Command: `cd site-3-professional-dark && npm install && npm run build`
- Build Output: `site-3-professional-dark/dist`

**Site 4:**
- Project Name: `portfolio-site-4`
- Build Command: `cd site-4-glassmorphism-light && npm install && npm run build`
- Build Output: `site-4-glassmorphism-light/dist`

**Site 5:**
- Project Name: `portfolio-site-5`
- Build Command: `cd site-5-modern-tech && npm install && npm run build`
- Build Output: `site-5-modern-tech/dist`

**Site 6:**
- Project Name: `portfolio-site-6`
- Build Command: `cd site-6-brutalist-bold && npm install && npm run build`
- Build Output: `site-6-brutalist-bold/dist`

3. **Result**: You'll get 6 independent URLs:
   - `https://xxx.portfolio-site-1.pages.dev/`
   - `https://xxx.portfolio-site-2.pages.dev/`
   - `https://xxx.portfolio-site-3.pages.dev/`
   - `https://xxx.portfolio-site-4.pages.dev/`
   - `https://xxx.portfolio-site-5.pages.dev/`
   - `https://xxx.portfolio-site-6.pages.dev/`

## 🎯 UI/UX Principles Applied

All sites follow modern UI/UX best practices:

✅ **Clear Visual Hierarchy** - Typography scale, color contrast, spacing
✅ **Consistent Spacing & Typography** - Design tokens, vertical rhythm
✅ **Accessibility** - WCAG AA compliance, keyboard navigation, ARIA labels
✅ **Responsive Design** - Mobile-first, breakpoints for all screen sizes
✅ **Performance** - Optimized animations, lazy loading
✅ **SEO** - Semantic HTML, meta tags, proper heading structure

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS with CSS Custom Properties
- **Animations**: Framer Motion
- **Build Tool**: Vite (Rolldown)
- **Deployment**: Cloudflare Pages

## 📝 JSON Data Structure

Each profile JSON includes:
- `basics`: Name, label, summary, contacts
- `work`: Work experience with company colors
- `skills`: **Enhanced with UI/UX skills**
- `projects`: Featured projects
- `education`: Educational background
- `achievements`: Awards and recognition

## 🔄 Auto-Deploy Workflow

Every push to your GitLab branch will:
1. Trigger all 6 Cloud Pages builds
2. Each site builds independently
3. Each URL updates automatically

## 📧 Support

For questions or issues, contact your team supervisor.

---

**Created for**: Internship Project - Resume 04 Repository
**Last Updated**: January 2026
