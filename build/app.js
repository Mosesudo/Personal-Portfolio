const button = document.getElementById("button");
const navlinks = document.getElementById("nav-links");
const bars = document.getElementById("#bars")
button.addEventListener("click", () => {
    navlinks.classList.toggle("hidden");
})
navlinks.addEventListener("click", () => {
    navlinks.classList.add("hidden")
})
