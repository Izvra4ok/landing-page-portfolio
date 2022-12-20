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

// const required = document.querySelectorAll("input");
// required.forEach((item) => {
//
//     item.addEventListener("input", function (event) {
//         console.log(item)
//         if (item.validity.typeMismatch) {
//             item.setCustomValidity("Some problems")
//             item.style.boxShadow = "1px 1px 3px 1px red";
//         } else {
//             item.setCustomValidity("")
//             item.style.boxShadow = "none"
//         }
//     })
// })


// const email = document.getElementById("email");
// email.addEventListener("input", function (event) {
//     if (email.validity.typeMismatch) {
//         email.setCustomValidity("I am expecting an e-mail address!");
//         email.style.boxShadow = "1px 1px 3px 1px red"
//     } else {
//         email.setCustomValidity("")
//         email.style.boxShadow = "none"
//     }
// });



const form = document.querySelector('.contacts__form')

form.addEventListener('submit', function (event) {
    event.preventDefault()
    event.target.reset()
})