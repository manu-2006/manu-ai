# Manu Kumar P — Portfolio

Personal developer portfolio for **Manu Kumar P**, a software developer and AI builder based in Bengaluru, India.

**Live website:** https://manu-ai-psi.vercel.app/  
**GitHub:** https://github.com/manu-2006  
**LinkedIn:** https://www.linkedin.com/in/manu-kumar-p  
**Instagram:** https://www.instagram.com/im_._manu  
**Email:** its.manukumar13@gmail.com

## About

I completed my Bachelor of Computer Applications (BCA) at ISBR College and am currently pursuing a Master of Computer Applications (MCA). I build web experiences, full-stack applications, AI/ML prototypes, and websites for clients. I’m interested in turning practical problems into useful, thoughtfully designed software.

## Featured projects

- **AI Digital Twin Hacker** — web security analysis concept for URL scanning, risk estimation, and AI-assisted recommendations.
- **AgriVision** — plant disease detection project exploring TensorFlow and computer vision.
- **LayerCraft** — AI-assisted poster editor concept focused on editable design layers and preserving Kannada and other Indian-language text.
- **SECMINBER** — privacy-first personal memory and reminder product concept.
- **Client websites** — responsive websites and digital experiences built and maintained for clients.

Project descriptions reflect current project work and concepts; they do not imply that every product is publicly released.

## Tech stack

- **Frontend:** HTML, CSS, JavaScript, React, Vite, Tailwind CSS
- **Backend & programming:** Python, Flask, FastAPI, C, C++, Java
- **AI & computer vision:** TensorFlow, OpenCV, OCR, AI/ML
- **Tools & deployment:** Git, GitHub, Supabase, Vercel, SEO

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/manu-2006/manu-ai.git
cd manu-ai
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Project structure

```
public/
  img/
    faces/       # Profile/avatar images
    photos/      # Portfolio photographs
src/
  components/    # React page sections and UI components
  lib/           # Animation and scrolling helpers
  styles/        # Global styling
  App.jsx
  data.js        # Profile, projects, skills, and timeline content
index.html       # Page title and SEO metadata
```

## Personalizing the site

- Update profile details, project cards, skills, and timeline in `src/data.js`.
- Update page title and SEO metadata in `index.html`.
- Update colors, typography, layout, and responsive styles in `src/styles/global.css`.
- Replace portrait assets in `public/img/faces/` and `public/img/photos/` with images you have permission to publish.

## Deploy with Vercel

1. Import `manu-2006/manu-ai` into Vercel.
2. Select **Vite** as the framework if prompted.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy the `main` branch.

## Credits and licensing

This portfolio is customized and maintained by Manu Kumar P. It began from the Peach Portfolio project by [Lohitha Damisetti](https://github.com/lohithadamisetti123). Please retain applicable third-party notices and license terms when redistributing or modifying upstream code. The repository's `LICENSE` file remains the reference for the code license. Personal photographs and project content should only be reused with the rights holder's permission.
