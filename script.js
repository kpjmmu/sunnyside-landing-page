const menuBtn = document.querySelector(".menu-icon");

menuBtn.addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("hidden");
})