const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("hide");

    menuButton.textContent = nav.classList.contains("hide") ? "☰" : "✖";

});



window.addEventListener("resize", () => {

    if (window.innerWidth >= 700) {
        nav.classList.remove("hide");
        menuButton.textContent = "☰";
    }

});


// Footer year
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();


// Last modified
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;