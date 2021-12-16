export const menuHandler = () => {
    const headerMenu = document.querySelector("#header-menu");
    const headerMenuButton = document.querySelector("#header-menu-button");
    const headerMenuCloseButton = document.querySelector("#header-menu-close");

    if (headerMenu === null || headerMenuButton === null) {
        console.error("Header menu elements are not available");
        return;
    }

    const personalMenu = document.querySelector("#personal-menu");
    const personalMenuButton = document.querySelector("#personal-menu-button");
    const personalMenuCloseButton = document.querySelector(
        "#personal-menu-close"
    );

    if (personalMenu === null || personalMenuButton === null) {
        console.error("Personal menu elements are not available");
        return;
    }

    let isPersonalMenuCall = false;
    let isPersonalMenuClose = false;

    const closeHeaderMenuHandler = () => {
        headerMenu.classList.remove("header--active");
        headerMenuButton.classList.remove("main__menu-button--active");
    };

    const closePersonalMenuHandler = () => {
        personalMenu.classList.remove("personal--active");
    };

    const outsideClickHandler = (e) => {
        const isClickedOnNavigation = e.target.closest("[data-navigation]");

        if (!isClickedOnNavigation) {
            closeHeaderMenuHandler();
            closePersonalMenuHandler();
        }
    };

    if (headerMenuCloseButton !== null) {
        headerMenuCloseButton.addEventListener("click", closeHeaderMenuHandler);
    }

    if (personalMenuCloseButton !== null) {
        personalMenuCloseButton.addEventListener("click", () => {
            closePersonalMenuHandler();
            isPersonalMenuClose = true;
        });
    }

    headerMenuButton.addEventListener("click", () => {
        if (personalMenu.classList.contains("personal--active")) {
            closeHeaderMenuHandler();
            closePersonalMenuHandler();
        } else {
            headerMenu.classList.toggle("header--active");
            headerMenuButton.classList.toggle("main__menu-button--active");
        }
    });

    headerMenu.addEventListener("transitionend", (e) => {
        if (e.target === headerMenu && isPersonalMenuCall) {
            personalMenu.classList.add("personal--active");
            isPersonalMenuCall = false;
        }
    });

    personalMenuButton.addEventListener("click", () => {
        headerMenu.classList.remove("header--active");
        isPersonalMenuCall = true;
    });

    personalMenu.addEventListener("transitionend", (e) => {
        if (e.target === personalMenu && isPersonalMenuClose) {
            headerMenu.classList.add("header--active");
            isPersonalMenuClose = false;
        }
    });

    document.addEventListener("click", outsideClickHandler);
};
