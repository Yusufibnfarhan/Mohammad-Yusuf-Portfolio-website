/*
    ╔══════════════════════════════════════════════════════════╗
    ║         PORTFOLIO JAVASCRIPT — Mohammad Yusuf            ║
    ║         File: script.js                                  ║
    ╠══════════════════════════════════════════════════════════╣
    ║  What is JavaScript (JS)?                                ║
    ║  JS adds BEHAVIOR and INTERACTIVITY to your website.     ║
    ║                                                          ║
    ║    HTML  = What is on the page  (structure)              ║
    ║    CSS   = How it looks         (style)                  ║
    ║    JS    = What it DOES         (behavior)               ║
    ║                                                          ║
    ║  JS runs in the browser — no installation needed!        ║
    ║                                                          ║
    ║  This file handles:                                      ║
    ║    1. Navbar shadow when user scrolls                    ║
    ║    2. Highlight active nav link for current section      ║
    ║    3. Hamburger menu for mobile                          ║
    ║    4. Typing animation in the hero section               ║
    ║    5. Cards fade in as you scroll down the page          ║
    ╚══════════════════════════════════════════════════════════╝
*/


/* ═══════════════════════════════════════════════
   PART 0 — DARK / LIGHT THEME TOGGLE & LOCALSTORAGE
   Allows switching between Dark and Light mode.
   Saves user choice in browser localStorage so it
   persists even after refreshing or closing the page!
   ═══════════════════════════════════════════════ */

/*
    What is localStorage?
    It is a built-in browser memory key-value store.
    - localStorage.setItem('key', 'value') -> saves data
    - localStorage.getItem('key')          -> retrieves data
    - Data stays saved even when the user refreshes or closes the tab!
*/
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// 1. Check if user previously saved a theme preference in localStorage
const savedTheme = localStorage.getItem('portfolio-theme');

// If the saved theme was 'dark', apply it immediately on page load
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Show sun icon in dark mode
    }
}

// 2. Event listener for theme toggle button click
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
        // Toggle the 'dark-mode' class on the <body>
        document.body.classList.toggle('dark-mode');

        // Check if dark mode is now active
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Update icon between Moon (🌙) and Sun (☀️)
        if (themeIcon) {
            if (isDarkMode) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }

        // Save the chosen theme in localStorage
        localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
    });
}


/* ═══════════════════════════════════════════════
   PART 1 — NAVBAR SHADOW ON SCROLL
   When the user scrolls down past 50px,
   we add a CSS class that makes the navbar
   shadow a bit stronger.
   ═══════════════════════════════════════════════ */

/*
    document.getElementById('id')
    finds the HTML element with id="navbar" and
    gives us a reference to it so we can change it.
    We store the reference in a constant (const).
    const = a variable that won't be reassigned.
*/
const navbar = document.getElementById('navbar');

/*
    addEventListener listens for a specific EVENT.
    'scroll' fires every time the user scrolls the page.
    The function inside runs each time scrolling happens.
*/
window.addEventListener('scroll', function () {

    /*
        window.scrollY = how many pixels scrolled down from the top.
        classList.add   = adds a CSS class to the element.
        classList.remove = removes a CSS class from the element.
        The "scrolled" class is defined in style.css to add a stronger shadow.
    */
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/* ═══════════════════════════════════════════════
   PART 2 — ACTIVE NAV LINK (HIGHLIGHT)
   As you scroll through sections, the matching
   nav link turns blue to show which section
   you are currently reading.
   ═══════════════════════════════════════════════ */

/*
    querySelectorAll returns ALL elements matching a CSS selector.
    '.nav-links a' matches every <a> inside .nav-links.
    'section[id]' matches every <section> that has an id attribute.
*/
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

/*
    IntersectionObserver watches elements and tells us
    when they enter or leave the visible screen area.
    This is better than checking every scroll event.
*/
const activeNavObserver = new IntersectionObserver(
    function (entries) {
        /*
            entries = list of observed elements.
            forEach loops through each one.
        */
        entries.forEach(function (entry) {

            /*
                entry.isIntersecting is true when the element
                is currently visible on screen.
            */
            if (entry.isIntersecting) {

                // Get the id of the visible section (e.g. "about", "skills")
                const currentId = entry.target.id;

                // Loop through all nav links
                navLinks.forEach(function (link) {
                    // Remove "active" from ALL links first
                    link.classList.remove('active');

                    /*
                        getAttribute('href') gets the href value, e.g. "#about"
                        We check if it matches "#" + the current section's id.
                    */
                    if (link.getAttribute('href') === '#' + currentId) {
                        link.classList.add('active'); // Highlight this link
                    }
                });
            }
        });
    },
    {
        /*
            rootMargin adjusts the detection boundaries.
            "-30% 0px -60%" means the observer fires only when
            the section is in the middle 10% of the screen.
            This avoids the active link flickering at section edges.
        */
        rootMargin: '-30% 0px -60%',
    }
);

// Start observing each section
sections.forEach(function (section) {
    activeNavObserver.observe(section);
});


/* ═══════════════════════════════════════════════
   PART 3 — HAMBURGER MENU (MOBILE)
   On small screens the nav links are hidden.
   Clicking the hamburger icon shows / hides them.
   ═══════════════════════════════════════════════ */

const hamburger = document.getElementById('hamburger');
const navLinksList = document.getElementById('nav-links');

// Listen for a click on the hamburger icon
hamburger.addEventListener('click', function () {
    /*
        classList.toggle adds the class if it's missing,
        or removes it if it's already there.
        This "toggles" the menu open and closed with one button.
    */
    navLinksList.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// When any nav link is clicked, close the mobile menu
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinksList.classList.remove('open');
        hamburger.classList.remove('open');
    });
});


/* ═══════════════════════════════════════════════
   PART 4 — TYPING ANIMATION
   Types out different titles in the hero section
   one character at a time, then deletes them,
   then types the next one — on repeat.
   ═══════════════════════════════════════════════ */

// The element where the text will appear (<span id="typed-text">)
const typedTextEl = document.getElementById('typed-text');

// The list of titles to cycle through
const titles = [
    'CSE (AI & ML) Student',
    'Tech Enthusiast',
    'Python Developer',
    'Green House Captain',
    'Aspiring AI Engineer',
];

let titleIndex = 0;  // Which title we are on (starts at 0 = first title)
let charIndex  = 0;  // Which character position we are at
let isDeleting = false; // Are we currently deleting or typing?

// The function that runs repeatedly to create the typing effect
function type() {

    /*
        titleIndex % titles.length
        The % is the MODULUS operator — it gives the remainder.
        Example: 5 % 5 = 0, so we loop back to the first title
        when we reach the end of the list.
    */
    const currentTitle = titles[titleIndex % titles.length];

    if (isDeleting) {
        /*
            DELETING: shorten the text by 1 character.
            String.slice(start, end) extracts part of a string.
            slice(0, charIndex) keeps characters from position 0 to charIndex.
            As charIndex decreases, the displayed text shrinks.
        */
        typedTextEl.textContent = currentTitle.slice(0, charIndex);
        charIndex--;
    } else {
        /*
            TYPING: grow the text by 1 character.
            As charIndex increases, the displayed text grows.
        */
        typedTextEl.textContent = currentTitle.slice(0, charIndex);
        charIndex++;
    }

    // Default speed between characters (in milliseconds)
    let speed = 100;

    // Delete faster than typing
    if (isDeleting) {
        speed = 55;
    }

    // Finished typing the whole title — pause, then start deleting
    if (!isDeleting && charIndex === currentTitle.length + 1) {
        speed = 1800;       // Pause for 1.8 seconds before deleting
        isDeleting = true;
    }

    // Finished deleting — move to the next title
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex++;       // Move to the next title in the array
        speed = 300;        // Short pause before typing the next title
    }

    /*
        setTimeout runs a function ONCE after a delay.
        Here we call type() again after "speed" milliseconds.
        This creates a loop: type() → wait → type() → wait → ...
    */
    setTimeout(type, speed);
}

// Kick off the animation after 500ms (so the page loads first)
setTimeout(type, 500);


/* ═══════════════════════════════════════════════
   PART 5 — SCROLL FADE-IN ANIMATION
   Cards and content blocks start invisible.
   When they scroll into view, they fade in
   and slide up slightly.
   ═══════════════════════════════════════════════ */

/*
    We programmatically inject the CSS styles needed
    for the animation. This keeps all animation logic
    in one place (this JS file).
    
    Alternatively you could put these styles in style.css — both work.
*/
const animStyle = document.createElement('style'); // Create a <style> tag
animStyle.textContent = `
    /*
        Starting state: invisible and 30px below final position.
        opacity: 0     → fully transparent (invisible)
        transform: translateY(30px) → moved 30px downward
        transition     → animates changes to opacity and transform
    */
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    /*
        Final state: fully visible and in its natural position.
        JS adds the "visible" class to trigger this state.
    */
    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(animStyle); // Add the <style> tag to the <head>

// Select all the elements we want to animate
const animTargets = document.querySelectorAll(
    '.project-card, .skill-category, .achievement-card, .hobby-card, .contact-card, .timeline-content, .about-content'
);

// Add the starting (invisible) class to each element
animTargets.forEach(function (el) {
    el.classList.add('animate-on-scroll');
});

// Create an observer that watches when elements enter the viewport
const scrollObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // Add "visible" class → triggers the CSS animation
                entry.target.classList.add('visible');

                /*
                    unobserve: stop watching this element.
                    Once it has animated, no need to keep watching it.
                    This improves performance.
                */
                scrollObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12, // Trigger when at least 12% of the element is visible
    }
);

// Start observing each animation target
animTargets.forEach(function (el) {
    scrollObserver.observe(el);
});


/* ═══════════════════════════════════════════════
   PART 6 — SMOOTH SCROLL FOR NAV LINKS
   When a nav link is clicked, smoothly scroll
   to the target section instead of jumping.
   (Most browsers handle this via CSS scroll-behavior: smooth,
    but this adds extra cross-browser support.)
   ═══════════════════════════════════════════════ */

/*
    querySelectorAll('a[href^="#"]')
    Selects all <a> tags whose href STARTS WITH "#"
    (i.e. all internal page links like #about, #skills).
*/
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {

        // Prevent the default jump-to behaviour
        event.preventDefault();

        // Get the target id (e.g. "#about")
        const targetId = this.getAttribute('href');
        const targetEl = document.querySelector(targetId);

        if (targetEl) {
            /*
                scrollIntoView smoothly scrolls to the element.
                behavior: 'smooth' = animated scroll (not instant jump)
                block: 'start'     = align the top of the element to the top of the screen
            */
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


/* ═══════════════════════════════════════════════
   PART 7 — DEVELOPER EASTER EGG
   A friendly message in the browser console
   for anyone who opens the DevTools to inspect
   the code. (Press F12 → Console tab to see it!)
   ═══════════════════════════════════════════════ */
console.log('%c🚀 Mohammad Yusuf | Portfolio', 'font-size:18px; font-weight:bold; color:#2563eb;');
console.log('%cCSE AI & ML | SRM IST | ACM Student Chapter', 'color:#7c3aed; font-size:13px;');
console.log('%c🔗 github.com/Yusufibnfarhan', 'color:#475569;');
console.log('%c🔗 linkedin.com/in/mohammad-yusuf-2160b9401', 'color:#475569;');
console.log('%c💡 Built with plain HTML, CSS & JS — no libraries, no frameworks!', 'color:#10b981;');

