// =======================
// Payal Ki Rasoi
// script.js
// =======================

// Sticky Navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {
    menuBtn.onclick = () => {
        nav.classList.toggle("active");
    };
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

// Fade Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".card,.recipe,.gallery img,.section").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Recipe Search
const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", () => {

        const filter = search.value.toLowerCase();

        document.querySelectorAll(".recipe").forEach(recipe => {

            const text = recipe.innerText.toLowerCase();

            recipe.style.display = text.includes(filter)
                ? "block"
                : "none";

        });

    });

}

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#ff6b00;
color:white;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.2);
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Gallery Lightbox
function openImage(src) {

    const lightbox = document.getElementById("lightbox");
    const preview = document.getElementById("preview");

    if (lightbox && preview) {

        lightbox.style.display = "flex";

        preview.src = src;

    }

}

function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (lightbox) {

        lightbox.style.display = "none";

    }

}

// Footer Year
const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}

// Welcome Message
console.log("🍲 Welcome to Payal Ki Rasoi");
