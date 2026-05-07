// ================= main.js =================



// =====================================================
// STICKY NAVBAR
// =====================================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 50);

});



// =====================================================
// ACTIVE NAV LINKS
// =====================================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(nav => nav.classList.remove("active"));

        link.classList.add("active");

    });

});



// =====================================================
// SEARCH FILTER
// =====================================================

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            let title = card.querySelector("h3").innerText.toLowerCase();

            let text = card.querySelector("p").innerText.toLowerCase();

            if(
                title.includes(filter) ||
                text.includes(filter)
            ){

                card.style.display = "block";

            }else{

                card.style.display = "none";
            }

        });

    });

}



// =====================================================
// SCROLL ANIMATION
// =====================================================

const scrollElements = document.querySelectorAll(

    ".hero-text, .hero-image, .product-card, .routine-card, .tip-box, .instagram-container img, .quote, .section-title"

);



// =====================================================
// CHECK ELEMENT IN VIEW
// =====================================================

const elementInView = (el, offset = 100) => {

    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop < window.innerHeight - offset
    );

};



// =====================================================
// DISPLAY ELEMENTS
// =====================================================

const displayScrollElement = () => {

    scrollElements.forEach((el) => {

        if(elementInView(el)){

            el.classList.add("show");

        }else{

            el.classList.remove("show");

        }

    });

};



// =====================================================
// SCROLL EVENT
// =====================================================

window.addEventListener("scroll", displayScrollElement);

window.addEventListener("load", displayScrollElement);



// =====================================================
// PRODUCT HEART ICON TOGGLE
// =====================================================

const heartIcons = document.querySelectorAll(
    ".fa-heart"
);

heartIcons.forEach(icon => {

    icon.addEventListener("click", () => {

        icon.classList.toggle("fa-regular");

        icon.classList.toggle("fa-solid");

        icon.classList.toggle("active-heart");

    });

});



// =====================================================
// PRODUCT IMAGE HOVER ROTATION
// =====================================================

const productCards = document.querySelectorAll(
    ".product-card"
);

productCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.4s ease";

    });

});



// =====================================================
// SIMPLE LOADER EFFECT
// =====================================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



// =====================================================
// SMOOTH BUTTON EFFECT
// =====================================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});



// =====================================================
// SCROLL TO TOP BUTTON
// =====================================================

// CREATE BUTTON

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.classList.add("top-btn");



// SHOW BUTTON

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.classList.add("show-top-btn");

    }else{

        topBtn.classList.remove("show-top-btn");

    }

});



// SCROLL TOP

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});



// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn = document.querySelector(".fa-bars");

const navMenu = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show-menu");

    });

}