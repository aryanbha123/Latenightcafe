# Late Night Cafe

A single-page landing site for a cafe in Mussoorie, built with React, Vite and Tailwind CSS.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

## About

Late Night Cafe is a front-end-only landing page for a cafe. The home page highlights delivery across Mussoorie, menu items such as chicken momos and burgers, and opening hours, alongside image sections and a hero with a video prompt. It is a work in progress: some sections still use placeholder copy, and the header links to pages (About Us, Gallery, Donations) that are not routed yet.

## Features

- Responsive layout with a header (hamburger menu on mobile) and footer with phone and email links
- Home page sections: feature block with images, hero, a showcase of the cafe's offerings, and a carousel-style feature grid
- Tailwind CSS 4 styling with dark-mode classes
- Client-side routing with React Router

## Tech Stack

- React 19, Vite 7 (SWC plugin)
- Tailwind CSS 4, MUI 7, styled-components, Font Awesome, React Icons
- React Router 7, Swiper, react-hot-toast, Axios
- ESLint

## Project Structure

```
src/
├── App.jsx            # Router
├── pages/Home.jsx     # Home page composition
├── components/        # Header, Footer, Layout, Hero, FeatureSection, ShowCase, Caursel
├── icons/             # Hamburger icon
├── utils/TextBox.jsx
└── assets/            # Images
```

## Getting Started

Prerequisites: Node.js and npm.

```bash
npm install
npm run dev
```

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
