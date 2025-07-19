// code-library.js - Common JavaScript for all pages

// DOM Elements
const currentYearSpan = document.getElementById('currentyear');
const lastModifiedParagraph = document.getElementById('lastModified');

// Current Year
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Last Modified Date
const lastModified = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;

// Toggle Dark Mode (optional enhancement)
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.classList.add('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

document.querySelector('header').appendChild(darkModeToggle);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.querySelector('main').classList.add('dark-mode');
}

// Copy Code Blocks Functionality
document.querySelectorAll('.command code').forEach(codeBlock => {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.classList.add('copy-button');
    
    copyButton.addEventListener('click', () => {
        const textToCopy = codeBlock.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy';
            }, 2000);
        });
    });
    
    codeBlock.parentNode.insertBefore(copyButton, codeBlock.nextSibling);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive Navigation Toggle (for mobile)
const navToggle = document.createElement('button');
navToggle.textContent = '☰ Menu';
navToggle.classList.add('nav-toggle');
navToggle.addEventListener('click', toggleNav);

document.querySelector('nav').prepend(navToggle);

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-open');
}

// Close nav when clicking on a link (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('nav').classList.remove('nav-open');
        }
    });
});

function updateThemeButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}