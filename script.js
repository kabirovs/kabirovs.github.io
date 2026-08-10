function toggleMenu() {
    const nav = document.getElementById("mainNav");
    nav.classList.toggle("active");
}

function showContacts() {
    const buttons = document.getElementById("contactButtons");

    if (buttons.style.display === "flex") {
        buttons.style.display = "none";
    } else {
        buttons.style.display = "flex";
    }
}
