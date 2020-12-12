export const initialState = {
    items: [],
    searchItems: [],
}

// export const getBasketTotal = (item) => basket?.reduce((amount, item) => item.price + amount, 0); 

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_ITEMS":
            return {
                ...state,
                items: [...state.items, action.items],
            };
        default:
            return state;
    }
};

export default reducer;