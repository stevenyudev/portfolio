# Portfolio for Steven Yu

A personal portfolio website built to showcase my skills, projects, experience and certifications that have made me the developer I am today.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Build & Deployment](#build--deployment)
- [Code Quality](#code-quality)
- [Performance & Accessibility](#performance--accessibility)
- [Known Issues & Roadmap](#known-issues--roadmap)
- [Credits](#credits)
- [Contact](#contact)

---

## Features

- Mobile-first & responsive design
- Smooth navigation & interactive UI components
- Animated backgrounds using SVGs, CSS gradients, Clip Paths and CSS transitions and animations
- Optimized load times
- SEO meta tags & accessibility best practices

---

## Tech Stack

- **Frontend**: TypeScript / JavaScript, HTML5, CSS3
- **Build tool**: Rsbuild — version 1.4.13
- **Styling methodology**: CSS modules
- **Linting / formatting**: ESLint, Prettier
- **Hosting / Deployment**: Vercel

---

## Project Structure

```
/
├── public/         → static files such as the favicon, images used for open graph and seo schema, and the downloadable CV
├── src/
├──|──assets/       → images used in components and models
├──|──components/
├──|──models/
├──|──store/
├──|──styles/
├── static/         → just contains index.html used for providing link to favicon, meta tags, seo schema
├── .prettierignore
├── .prettierrc
├── eslint.config.mjs
├── package.json
├── rsbuild.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

Prerequisites:

- Node.js v24 or higher
- npm installed globally

## Usage

Once running locally, open `http://localhost:3000` in your browser.

---

## Build & Deployment

```bash
npm run build       # builds optimized production version
npm run preview     # preview production locally
```

To deploy, this uses **Vercel**. The deployment steps are: … (if applicable)

---

## Code Quality

- **Linting**: `npm run lint` runs ESLint with config in `eslint.config.mjs`
- **Formatting**: `prettier` settings in `.prettierrc`, `.prettierignore` etc.
- Rules:
  - Components use PascalCase in file names and exported names.
  - CSS file names, CSS classes, and image file names use kebab-case.
  - CSS module file names end with module.css.
  - Model file names end with .model.ts
  - Variables and other file names use camelCase.
  - Image file names provide a description of what the image is which can be used for the alt text.

---

## Performance & Accessibility

- Performed audits with Lighthouse
- Optimized images & fonts
- Semantic HTML & keyboard navigation support
- ARIA attributes where needed

---

## Known Issues & Roadmap

- Memory usage can be quite high, especially if the site has been open for a while.
- Ocassionally, elements that use CSS transforms in animations can appear out of place. This may just be in development though after a large period of time developing.
- There's currently no toggle for light / dark mode, this could be a feature to add in the future.
- There's a limit on how many emails can be sent per month for free using email js. Whilst this is a small site and it should be ok, if someone were to spam the form with emails, it could prevent receiving genuine emails when a user fills in the form. Need to put in deterrents to prevent spam and potentially look into other forms of sending the email.

---
