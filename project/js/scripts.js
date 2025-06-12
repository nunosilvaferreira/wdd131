// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');
const activityFeed = document.getElementById('activity-feed');

// Mobile Menu Toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Update footer year and last modified
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// Activity Feed Data
const activities = [
    {
        date: '2023-11-15',
        title: 'Added Python OOP examples',
        description: 'Included class inheritance examples from CSE111'
    },
    {
        date: '2023-11-10',
        title: 'Created JavaScript DOM manipulation section',
        description: 'Added event listeners and DOM modification examples from WDD131'
    },
    {
        date: '2023-11-05',
        title: 'Uploaded C# design patterns',
        description: 'Included singleton and factory patterns from CSE210'
    }
];

// Display Activities
function displayActivities() {
    if (!activityFeed) return;
    
    // Sort by date (newest first)
    activities.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let html = '';
    activities.forEach(activity => {
        html += `
            <div class="activity-item">
                <h3>${activity.title}</h3>
                <p class="activity-date">${formatDate(activity.date)}</p>
                <p>${activity.description}</p>
            </div>
        `;
    });
    
    activityFeed.innerHTML = html;
}

// Format date as Month Day, Year
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Theme functionality
function checkThemePreference() {
    const preferredTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', preferredTheme === 'dark');
    updateThemeButton(preferredTheme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    updateThemeButton(newTheme);
    
    return newTheme;
}

function updateThemeButton(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// Form validation for contact page
if (document.getElementById('contact-form')) {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Save form data to localStorage
        const formData = {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        };
        
        let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
        submissions.push(formData);
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
        
        alert('Thank you for your message!');
        contactForm.reset();
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    checkThemePreference();
    
    // Add theme toggle button if not exists
    if (!document.getElementById('theme-toggle')) {
        const themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.className = 'theme-toggle-btn';
        themeToggle.addEventListener('click', toggleTheme);
        
        // Add to header
        const header = document.querySelector('header');
        if (header) {
            header.appendChild(themeToggle);
        }
    }
    
    // Update theme button text
    updateThemeButton(localStorage.getItem('theme') || 'light');
    
    // Initialize other components
    displayActivities();
    
    // Quiz initializations (if any exist on page)
    if (document.getElementById('submit-quiz')) {
        document.getElementById('submit-quiz').addEventListener('click', () => {
            // Quiz submission logic
        });
    }
    
    if (document.getElementById('submit-js-quiz')) {
        document.getElementById('submit-js-quiz').addEventListener('click', () => {
            // JavaScript quiz submission logic
        });
    }
    
    if (document.getElementById('submit-html-css-quiz')) {
        document.getElementById('submit-html-css-quiz').addEventListener('click', () => {
            // HTML/CSS quiz submission logic
        });
    }
    
    if (document.getElementById('submit-csharp-quiz')) {
        document.getElementById('submit-csharp-quiz').addEventListener('click', () => {
            // C# quiz submission logic
        });
    }
});

// Make toggleTheme available globally for inline event handlers
window.toggleTheme = toggleTheme;