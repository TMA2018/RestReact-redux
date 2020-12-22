const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    };
};
const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
}
const addToCart = (id) => {
    return {
        type: 'MENU_ADDED',
        payload: id
    };
};

const deleteFromCart = (id) => {
    return {
        type: 'MENU_DELETED',
        payload: id
    };
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    addToCart,
    deleteFromCart
}