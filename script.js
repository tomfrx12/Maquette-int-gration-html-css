(function () {
    const html = document.documentElement;

    document.addEventListener("DOMContentLoaded", function () {
    const togglers = document.querySelectorAll("[data-theme-toggler]");
    togglers.forEach((toggler) => {
        toggler.addEventListener("click", toggleDarkMode);
    });
    });

    function toggleDarkMode() {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", newTheme);
    }
})();

window.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu");
    const header = document.querySelector("header");

    if (menuButton && header) {
        menuButton.addEventListener("click", function () {
            header.classList.toggle("menu-open");
        });
    }
});