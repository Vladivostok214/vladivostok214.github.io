# GEMINI.md - Radio Caleuche Online

## Project Overview
**Radio Caleuche Online** is a landing page for an insular communication platform based in Chilwé. It is built using the **BizPage** Bootstrap business template from [BootstrapMade](https://bootstrapmade.com/).

The project is a static website focused on audio streaming and content delivery (podcasts, news, artists).

### Core Technologies
- **HTML5 / CSS3**: Main structure and styling.
- **Bootstrap 4**: Responsive grid and UI components.
- **jQuery**: DOM manipulation and library integration.
- **Libraries**:
    - `animate.css`: Animations.
    - `wow.js`: Reveal animations on scroll.
    - `owlcarousel`: Carousels and sliders.
    - `superfish`: Navigation menu.
    - `lightbox`: Image gallery.
    - `isotope`: Portfolio filtering.

## Building and Running
Since this is a static site without a build step (no `package.json` or `Makefile` found), you can run it directly in a browser.

### Local Development
- **Live Server**: Use a local server like "Live Server" (VS Code extension) or `npx serve .` to preview the site.
- **Direct Access**: Open `index.html` in any modern web browser.

## Project Structure
- `index.html`: The main entry point and single-page structure.
- `css/`: Contains `style.css` for custom styling.
- `js/`: Contains `main.js` with theme initialization and custom logic.
- `lib/`: External vendor libraries (Bootstrap, jQuery, etc.).
- `img/`: Images, icons, and carousel assets.
- `contactform/`: PHP/JS files for handling contact form submissions.

## Development Conventions
- **Static Assets**: All CSS, JS, and Library assets are linked in `index.html`.
- **Theme Modification**: Custom logic should be added to `js/main.js` and styles to `css/style.css`.
- **Audio Streaming**: The site currently features a Zeno.fm stream: `http://stream.zeno.fm/x0adt3x1ey8uv`.

## TODO / Roadmap
- [ ] Migrate to a modern build system (e.g., Vite) if more complexity is added.
- [ ] Ensure all external links (Google Fonts) are loaded securely.
- [ ] Optimize images in `img/` for faster loading.
