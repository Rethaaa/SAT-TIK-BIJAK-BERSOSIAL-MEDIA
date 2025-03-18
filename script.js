const navView = document.querySelector("#nav-view");
let navList = document.querySelector(".nav-list");
navView.onclick = function() {
    navList.classList.toggle("slide");
}

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", event => {
        dropdown.classList.toggle("open");
    });
});