document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarNav");

    if (navbarToggler) {
        navbarToggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
        });
    }
});

function showLocation() {
    alert("123 Hair St., Beauty City, Phone: (123) 456-7890");
}


