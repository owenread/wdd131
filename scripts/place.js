document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

const temperature = 45;
const windSpeed = 10;

function calculateWindChill(temp, wind) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
}

const windChillEl = document.getElementById('wind-chill');

if (temperature <= 50 && windSpeed > 3) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillEl.textContent = `${chill.toFixed(1)}°F`;
} else {
    windChillEl.textContent = 'N/A';
}