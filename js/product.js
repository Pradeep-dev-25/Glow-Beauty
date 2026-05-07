// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.add("active");
    overlay.classList.add("active");

});

closeBtn.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

});

overlay.addEventListener("click", () => {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

});

// ================= HEART BUTTON =================

const hearts = document.querySelectorAll(".heart-btn");

hearts.forEach((heart) => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("active");

        if(heart.classList.contains("active")){

            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");

        }else{

            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
        }

    });

});

// ================= SCROLL ANIMATION =================

const animatedItems = document.querySelectorAll(
    ".product-card, .products-title, .search-box"
);

window.addEventListener("scroll", reveal);

function reveal(){

    animatedItems.forEach((item) => {

        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("show");
        }

    });

}

reveal();