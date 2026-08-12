function toggleMenu() {
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("active");
    }
}


function showContacts() {
    const buttons = document.getElementById("contactButtons");

    if (!buttons) {
        console.log("contactButtons не найден");
        return;
    }

    buttons.classList.toggle("show");
}


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
