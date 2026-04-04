
let count = parseInt(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("review-count").textContent = count;


document.getElementById("last-modified").textContent =
    "Last Modified: " + document.lastModified;