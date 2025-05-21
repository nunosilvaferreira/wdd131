// Display current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Display last modified date
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Get DOM elements
const tempElement = document.getElementById('temp');
const windSpeedElement = document.getElementById('wind-speed');
const windChillElement = document.getElementById('wind-chill');

// Get values
const temp = parseFloat(tempElement.textContent);
const windSpeed = parseFloat(windSpeedElement.textContent);

// Calculate wind chill if conditions are met
if (temp <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temp, windSpeed);
    windChillElement.textContent = `${windChill}°C`;
}