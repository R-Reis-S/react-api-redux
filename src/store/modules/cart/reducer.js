import produce from 'immer';

export default function cart(state = [], action) {
    // console.log(state);

    switch (action.type) {
        case 'ADD_TO_CART':
            return produce(state, draft => {
                draft.push(action.product);
                console.log(action)
            })
        case 'REMOVE_TO_CART':
            return produce(state, draft => {
                const productName = draft.findIndex(p => p.title === action.title);
                if (productName >= 0){
                    draft.splice(productName, 1);
                }
                // draft.splice(action.title ,1)
                console.log(action);
            })
        default:
            return state;
    }
}