const navBtn = document.querySelector(".nav_btn");
const options = document.querySelector(".options");

navBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    options.classList.toggle("show");
});

options.addEventListener("click", (e) => {
    e.stopPropagation();
});

window.addEventListener("click", () => {
    options.classList.remove("show");
});