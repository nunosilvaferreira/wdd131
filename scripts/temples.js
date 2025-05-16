// JavaScript for Temple Album page
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('.navigation');
    
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        const isOpen = navigation.classList.contains('open');
        menuButton.setAttribute('aria-expanded', isOpen);
        menuButton.textContent = isOpen ? '✕' : '☰';
    });
    
    // Add hover effects to navigation items
    const navItems = document.querySelectorAll('.navigation a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.backgroundColor = 'var(--nav-hover)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.backgroundColor = '';
        });
    });
});