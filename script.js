function toggleMenu() {
    const nav = document.getElementById("mainNav");

    if (nav) {
        nav.classList.toggle("active");
    }
}


function showContacts() {
    const buttons = document.getElementById("contactButtons");
    const orderButton = document.querySelector(".order-button");

    if (!buttons || !orderButton) {
        return;
    }

    if (buttons.style.display === "flex") {
        buttons.style.display = "none";

        orderButton.style.transform = "translateY(0)";
    } else {
        buttons.style.display = "flex";

        orderButton.style.transition = "transform 0.8s ease";

        setTimeout(function () {
            orderButton.style.transform = "translateY(-20px)";
        }, 50);
    }
}
