# Space Tourism Website 🚀

A multi-page space tourism website built with **React 19 + Vite** and **React Router v7**. This project focuses on client-side routing, data-driven UI, responsive backgrounds and accessible navigation patterns.

## 🚀 Overview

The goal was to build a fully responsive multi-page website where users can explore space destinations, meet the crew and learn about the technology — all handled as a single-page application with smooth client-side navigation.

## 🔗 Links

- **Live Site:** [View Live Demo](https://altindaselif.github.io/7-react-space-tourism-website/)
- **Code:** [View GitHub Repository](https://github.com/altindaselif/7-react-space-tourism-website)

## 💡 Key Features

- **🗺️ Client-Side Routing:** Four pages (Home, Destination, Crew, Technology) managed by React Router v7 with a shared `AppLayout` wrapper and a catch-all 404 route.
- **📦 Data-Driven Pages:** All destination, crew and technology content is sourced from a single `data.json` file, keeping the page components clean and content-agnostic.
- **🖼️ Responsive Backgrounds:** Each page uses a different background image per breakpoint (mobile / tablet / desktop) applied via CSS, swapping automatically at the correct viewport widths.
- **🖼️ Responsive Images:** The Technology page uses a `<picture>` element with a `srcSet` source to serve landscape images on small screens and portrait images on large screens.
- **🔍 Active NavLink Highlighting:** React Router's `NavLink` component is used to automatically apply an active style class to the current page's navigation item.
- **📱 Mobile Navigation:** A hamburger menu opens a slide-in nav overlay with click-outside detection via a `useRef` + document event listener, and body scroll lock via CSS class toggling.
- **♿ Accessibility:** `aria-label` attributes on all interactive elements, `aria-hidden="true"` on decorative images, and `loading="lazy"` on all content images.

## 🛠️ Technical Implementation

### 1. Nested Routing with a Shared Layout

All four pages share the same header, but the layout needs to be composed manually in React Router.

- **Solution:** React Router's nested route feature is used: `AppLayout` is defined as the parent route's `element`, and it renders `<Outlet />` where child page content should appear. All four pages are nested inside it, so the header renders once and persists across navigations without remounting.

### 2. Data-Driven Page Components

Each of the three inner pages (Destination, Crew, Technology) displays different content for multiple items while sharing the same layout.

- **Solution:** All content lives in `data.json` and is imported directly into each page component. Local `useState` tracks the currently selected item (e.g. `selectedDest`, `selectedCrew`). The active data object is derived with `.find()` on each render, so swapping the selection instantly updates the title, description, stats and image without any prop drilling or context.

### 3. Click-Outside Detection for Mobile Nav

The mobile navigation overlay should close when the user taps anywhere outside of it, which requires listening to document-level events while avoiding stale closure issues.

- **Solution:** Two `useRef` values (`navRef`, `openBtnRef`) hold references to the nav panel and the hamburger button. A `useEffect` registers a `click` event listener on `document` that checks `ref.current.contains(e.target)` to determine whether the click originated inside or outside the nav, and closes it accordingly. The listener is cleaned up on unmount via the effect's return function.

### 4. Responsive `<picture>` for Technology Images

The technology section has two entirely different image compositions — landscape for small screens, portrait for large screens — that can't be handled by CSS alone without downloading both files.

- **Solution:** A `<picture>` element wraps a `<source>` with a `media="(max-width: 48em)"` attribute pointing to the landscape image, and a fallback `<img>` pointing to the portrait image. The browser fetches only the appropriate asset for the current viewport.

## 📸 Screenshots

- [View Desktop Version](./desktop-screenshot.png)
- [View Tablet Version](./tablet-screenshot.png)
- [View Mobile Version](./mobile-screenshot.png)

## 🧰 Built With

- **React 19**
- **React Router v7**
- **Vite**
- **CSS Modules**
- **JavaScript (ES6+)**

## ✍️ Author

- **LinkedIn:** [Elif Altındaş](https://www.linkedin.com/in/elifaltindas/)
- **Frontend Mentor:** [@altindaselif](https://www.frontendmentor.io/profile/altindaselif)
- **GitHub:** [@altindaselif](https://github.com/altindaselif)
