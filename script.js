// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50
        ? "rgba(255,255,255,0.95)"
        : "rgba(255,255,255,0.2)";
    header.style.transition = "0.3s";
});

// Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";
    observer.observe(card);
});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff5e00;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 10px 20px rgba(0,0,0,.2);
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Welcome Message
window.onload = function () {
    console.log("Welcome to Payal Ki Rasoi 🍲");
};
