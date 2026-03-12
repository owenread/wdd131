document.addEventListener("DOMContentLoaded", () => {
    const radiusOutput = document.getElementById('radius');
    const areaOutput = document.querySelector('#area');

    const PI = 3.14159;
    let radius = 10;
    let area = PI * radius * radius;

    radiusOutput.innerHTML = radius;
    areaOutput.innerHTML = area;

    radius = 20;
    area = PI * radius * radius;
    radiusOutput.innerHTML = radius;
    areaOutput.innerHTML = area;
});