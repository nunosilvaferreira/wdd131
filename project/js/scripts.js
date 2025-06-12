// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const currentYear = document.getElementById('current-year');
const lastModified = document.getElementById('last-modified');
const activityFeed = document.getElementById('activity-feed');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Update footer year and last modified
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

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

// Theme preference using localStorage
function checkThemePreference() {
    const preferredTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-theme', preferredTheme === 'dark');
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
    
    return newTheme;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displayActivities();
    checkThemePreference();
    
    // Add theme toggle button if not exists
    if (!document.getElementById('theme-toggle')) {
        const themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.textContent = 'Toggle Dark Mode';
        themeToggle.addEventListener('click', toggleTheme);
        document.querySelector('header').appendChild(themeToggle);
    }
});

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
        
        let submissions = JSON.parse(localStorage.getItem('formSubmissions') || []);
        submissions.push(formData);
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
        
        alert('Thank you for your message!');
        contactForm.reset();
    });
}