// ===============================
// МОБИЛЬНОЕ МЕНЮ
// ===============================

function toggleMenu() {
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("active");
    }
}


// ===============================
// ЗАКАЗАТЬ САЙТ
// ===============================

function showContacts() {
    const buttons = document.getElementById("contactButtons");

    if (!buttons) return;

    if (buttons.classList.contains("show")) {
        buttons.classList.remove("show");
    } else {
        buttons.classList.add("show");
    }
}


// ===============================
// ЗАКРЫТИЕ МЕНЮ ПОСЛЕ НАЖАТИЯ
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("#mainNav a");
    const nav = document.getElementById("mainNav");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("active");
            }

        });

    });

});
