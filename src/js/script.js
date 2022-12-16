//+ class active//

document.querySelectorAll('.promo__btns_link').forEach(function (el) {
    el.onclick = function (e) {
        document.querySelectorAll('.promo__btns_link').forEach(function (el) {
            el.classList.remove("promo__btns_link_active");
        });
        this.classList.add("promo__btns_link_active");
    }
})
//+ class active//


//hamburger menu//
const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    close = document.querySelector(".menu__nav_close"),
    overlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
    menu.classList.add("active")
    hamburger.classList.add("active");
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
    hamburger.classList.remove("active")
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active")
    hamburger.classList.remove("active")
});
//hamburger menu//


//percent//
const progress = document.querySelectorAll(".grid-skills__item_percent"),
    lines = document.querySelectorAll(".grid-skills__item_my");

progress.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
//percent//