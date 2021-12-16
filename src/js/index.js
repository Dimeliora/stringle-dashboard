import { mainMenuHandler } from "./main-menu";

document.addEventListener("DOMContentLoaded", () => {
    mainMenuHandler({
        menuSelector: "#header-menu",
        menuButtonSelector: "#header-menu-button",
        menuActiveClass: "header--active",
        menuButtonActiveClass: "main__menu-button--active",
    });
});
