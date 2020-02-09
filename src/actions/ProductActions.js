import {
    GET_PRODUCT_LIST,
    GET_FILTER_PRODUCTS,
    FETCH_PRODUCT_SUCCESS,
    SET_ERROR_INFO
} from '../actionTypes/ProductActionTypes';

export const getProductList = ({ count }) => ({
    type: GET_PRODUCT_LIST,
    payload: {
        count
    }
});

export const filterProducts = ({ keyword }) => ({
    type: GET_FILTER_PRODUCTS,
    payload: {
        keyword
    }
});

export const setSearchProductToStore = (payload) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload
});

export const setErrorInfo = (payload) => ({
    type: SET_ERROR_INFO,
    payload
});
