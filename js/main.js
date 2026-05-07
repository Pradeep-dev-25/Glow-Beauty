// ================= STICKY NAVBAR =================

window.addEventListener("scroll", () => {

    const header =
    document.querySelector("header");

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");
    }

});

// ================= ACTIVE NAV LINKS =================

const navLinks =
document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(nav => {

            nav.classList.remove("active");

        });

        link.classList.add("active");

    });

});

// ================= SEARCH FILTER =================

const searchInput =
document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        let filter =
        searchInput.value.toLowerCase();

        let cards =
        document.querySelectorAll(".product-card");

        cards.forEach(card => {

            let title =
            card.querySelector("h3")
            .innerText.toLowerCase();

            let text =
            card.querySelector("p")
            .innerText.toLowerCase();

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

// ================= SCROLL ANIMATION =================

const scrollElements =
document.querySelectorAll(

".hero-text, .hero-image, .product-card, .routine-card, .tip-box, .instagram-card, .quote, .section-title"

);

const elementInView = (el, offset = 100) => {

    const elementTop =
    el.getBoundingClientRect().top;

    return(
        elementTop <
        window.innerHeight - offset
    );

};

const displayScrollElement = () => {

    scrollElements.forEach((el) => {

        if(elementInView(el)){

            el.classList.add("show");
        }

    });

};

window.addEventListener(
    "scroll",
    displayScrollElement
);

window.addEventListener(
    "load",
    displayScrollElement
);

// ================= HEART TOGGLE =================

const heartIcons =
document.querySelectorAll(".fa-heart");

heartIcons.forEach(icon => {

    icon.addEventListener("click", () => {

        icon.classList.toggle("fa-regular");

        icon.classList.toggle("fa-solid");

        icon.classList.toggle("active-heart");

    });

});

// ================= BUTTON EFFECT =================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
        "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
        "translateY(0) scale(1)";
    });

});

// ================= SCROLL TOP BUTTON =================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

topBtn.classList.add("top-btn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.classList.add("show-top-btn");

    }else{

        topBtn.classList.remove("show-top-btn");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ================= MOBILE SIDEBAR =================

const menuBtn =
document.querySelector(".menu-btn");

const mobileMenu =
document.querySelector(".mobile-menu");

const closeBtn =
document.querySelector(".close-btn");

const overlay =
document.querySelector(".overlay");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.add("active");

        overlay.classList.add("active");

    });

}

if(closeBtn){

    closeBtn.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

    });

}

if(overlay){

    overlay.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        overlay.classList.remove("active");

    });

}