export const mainMenuHandler = ({
    menuSelector,
    menuButtonSelector,
    menuActiveClass,
    menuButtonActiveClass,
}) => {
    const menu = document.querySelector(menuSelector);
    const menuButton = document.querySelector(menuButtonSelector);

    if (menu === null || menuButton === null) {
        console.error("Menu elements not available");
        return;
    }

    const closeMenuHandler = (e) => {
        const isClickedOnMenu = e.composedPath().includes(menu);
        const isClickedOnMenuButton = e.composedPath().includes(menuButton);

        if (!isClickedOnMenu && !isClickedOnMenuButton) {
            menu.classList.remove(menuActiveClass);
            menuButton.classList.remove(menuButtonActiveClass);
        }
    };

    menuButton.addEventListener("click", () => {
        menu.classList.toggle(menuActiveClass);
        menuButton.classList.toggle(menuButtonActiveClass);
    });

    document.addEventListener("click", closeMenuHandler);
};
