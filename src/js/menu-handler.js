import { menuElms } from './dom-elements';

let isMenuOpened = false;

const outsideClickHandler = (e) => {
    const isClickedOnNavigation =
        e.composedPath().includes(menuElms.menuElm) ||
        e.composedPath().includes(menuElms.menuButtonElm);

    if (!isClickedOnNavigation) {
        closeMenuHandler();
    }
};

const closeMenuHandler = () => {
    menuElms.menuElm.classList.remove('navigation--active');
    menuElms.menuButtonElm.classList.remove('header__menu-button--active');

    isMenuOpened = false;
    menuElms.menuCloseElm.classList.remove('navigation__close--active');
};

menuElms.menuButtonElm.addEventListener('click', () => {
    menuElms.menuElm.classList.toggle('navigation--active');
    menuElms.menuButtonElm.classList.toggle('header__menu-button--active');

    isMenuOpened = !isMenuOpened;
});

menuElms.menuCloseElm.addEventListener('click', closeMenuHandler);

menuElms.menuElm.addEventListener('transitionend', () => {
    if (isMenuOpened) {
        menuElms.menuCloseElm.classList.add('navigation__close--active');
    }
});

document.addEventListener('click', outsideClickHandler);
