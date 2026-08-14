# FoodBox - Cafe & Restaurant Template

A modern, high-performance Cafe and Restaurant website template built with **React**, **Vite**, and **Tailwind CSS**.

## 🚀 Key Features & Best Practices

- **WebP Image Optimization:** All raster assets converted to compressed WebP format using ImageMagick for drastically faster load times.
- **Lazy Loading & Performance:** Native HTML `loading="lazy"` on below-the-fold images and `loading="eager"` on critical LCP hero elements.
- **Asset Organization:** Structured static assets cleanly inside `@/assets/images/`.
- **Path Aliasing:** Configured `@` alias mapping directly to `./src` in Vite configuration for cleaner imports.

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + PostCSS + Autoprefixer
- **Animations:** AOS (Animate On Scroll), React Type Animation

## 💻 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

---

## 🎨 Asset Structure

```
src/
├── assets/
│   └── images/      # WebP & SVG optimized assets
├── components/     # Modular React components
└── index.css       # Global styles & Tailwind directives
```

