import { FETCH_PRODUCT_SUCCESS } from '../actionTypes/ProductActionTypes';

const initialState = {
    productsData: []
};
export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS: {
            return {
                ...state,
                productsData: action.payload
            }
        }
        default:
            return state;
    }
}
