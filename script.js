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
        console.log("Элемент найден не был");
        return;
    }

    buttons.classList.toggle("show");

    if (buttons.classList.contains("show")) {

        orderButton.style.transform = "translateY(-8px)";
        orderButton.style.transition = "transform 0.8s ease";

    } else {

        orderButton.style.transform = "translateY(0)";

    }
}
