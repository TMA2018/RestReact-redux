const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED': 
            return {
                ...state,
                menu: state.menu,
                loading: true
            }; 
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                error: true
            };
        case 'MENU_ADDED': 
            const id = action.payload;
                
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    qty: ++itemInState.qty
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }

            } 
            // товара раньше не было в корзине
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qty: 1
            };
            
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            };    

        case 'MENU_DELETED': 
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx)
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['qty'];
            return {
                ...state, 
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ], 
                totalPrice: state.totalPrice - price
            }
   
        default: return state;
    }
};

export default reducer;