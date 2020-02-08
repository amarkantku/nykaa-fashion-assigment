import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools || compose;

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware({});
    const enhancer = composeEnhancers(
        applyMiddleware(
            sagaMiddleware,
            createLogger(),
        )
    );
    const store = createStore(rootReducer, initialState , enhancer)
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}
