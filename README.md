# 🚀 Mohammad Yusuf — Personal Portfolio Website

A clean, modern, and interactive personal portfolio website built with semantic HTML5, modern CSS3, and vanilla JavaScript. Crafted specifically to showcase my skills, projects, and achievements as a first-year Computer Science Engineering (AI & ML) student at SRM Institute of Science and Technology.

---

## 📌 Table of Contents
1. [Overview](#overview)
2. [Folder Structure](#folder-structure)
3. [How to Run the Project](#how-to-run-the-project)
4. [Features Implemented](#features-implemented)
5. [Additional Creative Features Added](#additional-creative-features-added)
6. [Learning Journey: Concepts Learned (In Sequence)](#learning-journey-concepts-learned-in-sequence)
7. [Customization & Contact](#customization--contact)

---

## 📖 Overview
This portfolio was developed as part of the recruitment task for the **ACM Student Chapter** at **SRM IST**. It represents a complete digital profile highlighting:
- Personal Bio & Taglines
- Educational background (SRM IST, Class 12, Class 10)
- Technical and Soft Skills
- Academic & Personal Projects (including Live Demo links)
- Leadership & Academic Achievements
- Hobbies & Passions
- Direct Social & Contact Channels

---

## 📂 Folder Structure

```
My Portfolio/
│
├── index.html       # Main webpage structure (Semantic HTML5)
├── style.css        # Visual styling, themes, animations & responsiveness (CSS3)
├── script.js        # Dynamic interactivity, animations & localStorage logic (Vanilla JS)
├── README.md        # Comprehensive project documentation and learning roadmap
└── images/          # Assets folder containing media
    └── profile.jpeg # Profile photograph
```

---

## 💻 How to Run the Project

No dependencies, server setups, or build tools are required!

1. Locate the **`My Portfolio`** folder on your Desktop.
2. Double-click **`index.html`** (or right-click → *Open with Google Chrome / Microsoft Edge / Firefox*).
3. The portfolio will immediately launch in your default web browser.

---

## ✨ Features Implemented

### 1. Header & Navigation Bar
- **Sticky / Fixed Navbar:** Stays fixed at the top of the viewport during scrolling for effortless navigation.
- **Dynamic Drop Shadow:** Subtle elevation shadow appears automatically when the user scrolls past the hero section.
- **Active Navigation Indicator:** Automatically highlights the current visible section in the navbar as you scroll down the page.
- **Mobile Responsive Hamburger:** Collapsible drawer navigation menu for mobile and tablet devices.

### 2. Interactive Hero Section
- **Dynamic Typing Effect:** An engaging typewriter animation cycling through roles (*CSE AI & ML Student*, *Tech Enthusiast*, *Python Developer*, *Aspiring AI Engineer*).
- **Profile Photograph Presentation:** High-resolution portrait framed with glowing ring accents.
- **Call-to-Action (CTA) Buttons:** One-click pathways to LinkedIn, GitHub, and the Contact form.

### 3. Detailed About Me
- Comprehensive introduction outlining passion for Artificial Intelligence, Machine Learning, and collaborative development.
- Quick Info Badges highlighting location, university, department, and graduation year.

### 4. Comprehensive Education Timeline
- **SRM Institute of Science and Technology (2026–2030):** B.Tech CSE with specialization in AI & ML, ACM Student Chapter recruit.
- **Ewing Christian Public School, Prayagraj (2025–2026):** Class 12 (PCM with Computer Science) — 70% Overall.
- **Ewing Christian Public School, Prayagraj (2023–2024):** Class 10 Secondary School Examination — 92% Overall with distinction.

### 5. Categorized Skills
- **Programming Languages:** Python, C, HTML.
- **Tools & Platforms:** VS Code, Canva, MS Office, GitHub.
- **Soft Skills & Leadership:** Team Leadership, Multitasking, Communication, Problem Solving.
- **Currently Exploring:** AI Fundamentals, Data Structures, CSS, JavaScript.

### 6. Projects Showcase
- **Bank Management System (Class 12 Boards):** Python, OOP, and File Handling project.
- **ACM Club Website (Recruitment Task):** Complete with **Live Demo** button (`https://yusufibnfarhan.github.io/ACM-Quiz-webpage/`) and GitHub repository link.
- **SRM Student Marketplace (WIP):** Peer-to-peer campus platform concept with dashed interactive card styling.

### 7. Verified Achievements
- **Science Club President:** Organized working model competitions and science events at school.
- **Green House Captain:** Led house teams to 2nd position in overall sports and cultural championships.
- **NSO School Gold Medalist:** First position at school level in the National Science Olympiad.
- **ACM Student Chapter Member:** Successfully built technical task projects.

### 8. Hobbies & Interests
- Interactive cards featuring Football, Gaming, Reading, and Exploring AI.

### 9. Contact & Social Channels
- One-click cards to GitHub, LinkedIn, and email address.

---

## 🎨 Additional Creative Features Added

1. **🌗 Dark / Light Mode Toggle with `localStorage` Persistence:**
   - Smooth one-click toggle switch between modern Light Mode and sleek Midnight Dark Mode.
   - Built with **`localStorage`**, ensuring your selected theme is remembered even when refreshing or reopening the browser.
2. **👀 Scroll-Driven Fade-In Animations (`IntersectionObserver`):**
   - Content cards and timeline milestones gracefully glide and fade in as they enter the screen.
3. **⚡ Zero External Frameworks:**
   - 100% written in pure HTML, CSS, and Vanilla JavaScript for ultra-fast loading speed and clean, understandable code.

---

## 📚 Learning Journey: Concepts Learned (In Sequence)

As a beginner, here is the curated step-by-step roadmap of concepts demonstrated in this project to explore and master:

### Phase 1: HTML Fundamentals (The Skeleton)
1. **Document Structure:** `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
2. **Metadata & Responsiveness:** `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
3. **Semantic HTML Elements:** Using `<nav>`, `<section>`, `<article>`, `<header>`, and `<footer>` instead of generic `<div>` tags for superior accessibility and SEO.
4. **Anchor Navigation:** Linking internal page sections using `#id` tags (e.g., `href="#about"`).
5. **Embedding Media:** Using `<img>` tags with `alt` attributes and proper aspect ratio preservation.

### Phase 2: CSS Styling & Layouts (The Visual Presentation)
1. **CSS Box Model:** Understanding how `margin`, `border`, `padding`, and `content` define dimensions.
2. **CSS Custom Properties (Variables):** Using `:root { --primary: #2563eb; }` and switching them dynamically in `body.dark-mode` for seamless theming.
3. **Flexbox (`display: flex`):** Aligning navigation bars, buttons, and badges in 1-dimensional layouts.
4. **CSS Grid (`display: grid`):** Building responsive multi-column layouts for Skills, Projects, and Hobbies without complex math.
5. **Transitions & Transforms:** Adding hover micro-interactions (`transform: translateY(-4px); transition: 0.3s ease`).
6. **Pseudo-elements (`::after`, `::before`):** Creating animated navigation link underlines and timeline lines.
7. **Responsive Media Queries (`@media`):** Adapting typography, hiding/showing elements, and re-stacking layouts for smartphones and tablets.

### Phase 3: JavaScript Interactivity (The Engine)
1. **DOM Selection:** Retrieving elements using `document.getElementById()` and `document.querySelectorAll()`.
2. **Event Listeners:** Listening for user clicks (`click`) and page scrolling (`scroll`).
3. **Class Manipulation:** Toggling and adding CSS classes using `classList.toggle('dark-mode')`, `classList.add()`, and `classList.remove()`.
4. **Browser `localStorage`:** Storing user settings locally on the machine with `localStorage.setItem()` and reading them on startup with `localStorage.getItem()`.
5. **Asynchronous Timers (`setTimeout`):** Creating recursive timing loops to power character-by-character typewriter animations.
6. **Modern APIs (`IntersectionObserver`):** Monitoring when elements enter the screen to trigger smooth animations and highlight active navigation links with maximum performance.

---

## 📬 Customization & Contact

- **Author:** Mohammad Yusuf
- **College:** SRM Institute of Science and Technology, Kattankulathur
- **GitHub:** [@Yusufibnfarhan](https://github.com/Yusufibnfarhan)
- **LinkedIn:** [Mohammad Yusuf](https://www.linkedin.com/in/mohammad-yusuf-2160b9401/)
- **Live Project:** [ACM Quiz Webpage](https://yusufibnfarhan.github.io/ACM-Quiz-webpage/)

*Crafted with passion, curiosity, and code for the ACM Student Chapter recruitment.*
