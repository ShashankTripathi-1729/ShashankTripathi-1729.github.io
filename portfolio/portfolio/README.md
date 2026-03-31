# Shashank Tripathi — Portfolio

Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis smooth scroll**.

---

## 🚀 Setup (3 steps)

### Step 1 — Install Node.js
Download from https://nodejs.org (LTS version, 18+)

### Step 2 — Install dependencies
Open terminal in this folder and run:
```bash
npm install
```

### Step 3 — Start dev server
```bash
npm run dev
```
Open http://localhost:3000 — your portfolio is live!

---

## 📦 Build for production (Vercel)

```bash
npm run build
```

Or just push to GitHub and deploy on **Vercel**:
1. Go to vercel.com → New Project → Import from GitHub
2. Select this repo → click Deploy
3. Done — live in 60 seconds with custom domain

---

## 🌐 Add your Spline robot

The Spline iframe is already embedded in `src/components/sections/HeroSection.tsx`.
Once published on a real domain (Vercel/GitHub Pages), the robot loads automatically.

---

## 📸 Add your photo (optional)

In `src/components/sections/AboutSection.tsx`, replace the timeline section with an `<img>` tag.

---

## 🔧 Update GitHub link

In `src/components/sections/ContactSection.tsx`, the GitHub link is already set to:
`https://github.com/ShashankTripathi-1729`

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework, SSR, routing |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll animations, hover effects, parallax |
| Lenis | Smooth scroll |
| Spline | 3D robot in hero |
| Canvas 2D | Particle field |

---

## File Structure

```
src/
  app/
    layout.tsx       ← root layout + metadata
    page.tsx         ← main page, scroll reveal setup
    globals.css      ← base styles, CSS variables, animations
  components/
    ui/
      Cursor.tsx     ← custom cursor
      Logo.tsx       ← animated SVG hex logo
      Navbar.tsx     ← sticky nav with active states
      Footer.tsx     ← footer
    sections/
      HeroSection.tsx    ← Spline robot, parallax name, particle field
      AboutSection.tsx   ← timeline layout
      ResearchSection.tsx ← research cards
      SkillsSection.tsx  ← 4 category cards + tools grid
      ContactSection.tsx ← contact links
    three/
      ParticleField.tsx  ← Canvas 2D particle network
```
