# GEMINI.md - Radio Caleuche Online

## Project Overview
**Radio Caleuche Online** is a vanguard landing page for an insular communication platform based in Chilwé. It features a custom high-impact "Minimalismo Vanguardista" (Swiss Style) design.

The project is a static website optimized for performance, SEO, and a premium "Dark Mode" audio streaming experience.

### Core Design Mandates
- **Style:** Minimalismo Vanguardista / Swiss Design.
- **Color Palette:** Rich Black (`#0a0a0a`), True White (`#ffffff`), and Signal Red (`#ff0033`) for active states.
- **Typography:** Montserrat (weights 200, 400, 700, 900) for high-impact headers; Open Sans for body text.
- **Layout:** Massive typography, extreme negative space, and a centered, dominant custom audio player.

### Core Technologies
- **HTML5 / CSS3:** Modern grid-less (flexbox based) responsive structure.
- **JavaScript (jQuery):** Minimalist custom logic for the audio player and smooth navigation.
- **SVG Favicon:** High-contrast dynamic SVG icon.

## Building and Running
This is a high-performance static site. No build step required.

### Local Development
- **Preview:** Use `npx serve .` or any static file server.
- **URL:** `index.html` is the entry point.

## Project Structure
- `index.html`: Optimized semantic HTML5 entry point.
- `css/style.css`: Vanguard CSS using custom variables and fluid typography (`clamp()`).
- `js/main.js`: Optimized UI logic (Player control, scroll management).
- `img/`: Optimized assets (Redundant files removed).
- `lib/`: Minimum necessary external vendor libraries.

## Development Conventions
- **CSS First:** Use CSS variables in `:root` for all design tokens.
- **Mobile First:** Ensure any changes maintain the `100vw` zero-overflow mandate.
- **Audio Logic:** Player controls are custom-built in `js/main.js`; do not use native `<audio>` controls.
- **SEO & Social:** Always maintain the Open Graph and Twitter Card tags in `index.html`.

## Performance Standards
- **Minification:** Keep `style.css` and `main.js` lightweight.
- **Asset Weight:** Do not add unoptimized images. Prefer SVG for icons.
- **Responsiveness:** Maintain full horizontal navigation on all screens (no hamburger menu per user preference).
