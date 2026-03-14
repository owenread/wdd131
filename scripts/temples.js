const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("hide");
});


// footer year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();


// last modified
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;
