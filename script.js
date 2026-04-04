const navBtn = document.querySelector(".nav_btn");
const options = document.querySelector(".options");

navBtn.addEventListener("click", () => {
    options.classList.toggle("show");
});