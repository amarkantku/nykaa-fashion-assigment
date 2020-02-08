import { fork, all } from 'redux-saga/effects';
import ProductSaga from './ProductSaga';

export default function* rootSaga() {
    yield all([
        fork(ProductSaga)
    ]);
}