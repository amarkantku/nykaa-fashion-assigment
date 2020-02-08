import { all, takeLatest, put } from 'redux-saga/effects';
import { GET_PRODUCT_LIST } from '../actionTypes/ProductActionTypes';
import mockData from '../mocks/products-dataset';

export function* getProductSaga(action) {
    try {
        yield put({
            type: 'FETCH_PRODUCT_SUCCESS',
            payload: mockData,
        });
    } catch (err) {
        yield 1;
        console.error(err);
    }
}

export default function* root() {
    yield all([
        takeLatest(GET_PRODUCT_LIST, getProductSaga),
    ]);
}