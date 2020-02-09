import { FETCH_PRODUCT_SUCCESS, SET_ERROR_INFO } from '../actionTypes/ProductActionTypes';

const initialState = {
    productsData: [],
    errors: {},
};
export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS: {
            return {
                ...state,
                productsData: action.payload
            }
        }
        case SET_ERROR_INFO: {
            return {
                ...state,
                errors: action.payload
            }
        }
        default:
            return state;
    }
}
