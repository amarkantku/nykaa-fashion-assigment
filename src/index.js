import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import configureStore from '../src/store';
import rootSaga from '../src/sagas';

const store = configureStore();
store.runSaga(rootSaga);
ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
