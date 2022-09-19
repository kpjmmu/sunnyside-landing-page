const openBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close")

openBtn.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("hidden");
})

closeBtn.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("hidden");
})