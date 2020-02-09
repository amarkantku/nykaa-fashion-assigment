import { all, takeLatest, put } from 'redux-saga/effects';
import { GET_PRODUCT_LIST, GET_FILTER_PRODUCTS } from '../actionTypes/ProductActionTypes';
import { setSearchProductToStore, setErrorInfo } from '../actions/ProductActions'
import mockData from '../mocks/products-dataset';

export function* getProductSaga(action) {
    try {
        const result = mockData.slice(0, action.payload.count);
        yield put(setSearchProductToStore(result));
    } catch (err) {
        yield put(setErrorInfo(err));
    }
}

export function* filterProductSaga(action) {
    const keyword = action.payload.keyword.toUpperCase();
    const result = mockData.filter(item => item.title.toUpperCase().includes(keyword))
    try {
        yield put(setSearchProductToStore(result));
    } catch (err) {
        yield put(setErrorInfo(err));
    }
}

export default function* root() {
    yield all([
        takeLatest(GET_PRODUCT_LIST, getProductSaga),
        takeLatest(GET_FILTER_PRODUCTS, filterProductSaga),
    ]);
}