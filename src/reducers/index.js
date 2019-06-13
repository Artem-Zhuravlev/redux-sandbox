const initialState = {
    books: []
}

const reducer = (state = initialState, action) => {
    return state;

    switch (action.type) {
        case 'BOOKS_LOADED' : 
            return {
                books: action.payload
            };
        
        default: 
            return state;
    }
}

export default reducer;