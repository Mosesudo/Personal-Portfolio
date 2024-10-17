const button = document.getElementById("button");
const navlinks = document.getElementById("nav-links");
const bars = document.getElementById("bars");
const ball = document.getElementById('ball');
const container = document.getElementById('container');
const text = document.getElementById('text')
const body = document.getElementById("body");
button.addEventListener("click", () => {
    navlinks.classList.toggle("hidden");
})
navlinks.addEventListener("click", () => {
    navlinks.classList.add("hidden")
})
ball.addEventListener("click", () =>
{  
    if(!body.classList.contains('dark')) {
    body.classList.add('dark')
text.innerText = "Light Mode"
ball.style.transform = 'translateX(19px)';
ball.style.background = "white"
    }
    else {
        body.classList.remove("dark");
        text.innerText = "Dark Mode";
        ball.style.transform = "translateX(2px)"
        ball.style.background = "black"
    }
})