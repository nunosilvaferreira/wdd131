// Track review count using localStorage
document.addEventListener('DOMContentLoaded', function() {
    const reviewCountElement = document.getElementById('reviewCount');
    
    // Get current count from localStorage or initialize to 0
    let count = localStorage.getItem('reviewCount');
    if (count === null) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    
    // Increment count and update localStorage
    count++;
    localStorage.setItem('reviewCount', count);
    
    // Update the display
    reviewCountElement.textContent += count;
});