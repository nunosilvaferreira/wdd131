// Get current year for copyright
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get last modified date
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Get the current year for the footer
document.addEventListener('DOMContentLoaded', function() {
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent += document.lastModified;
});