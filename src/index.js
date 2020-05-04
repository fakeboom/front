import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import './index.css';
import Root from './router';
import rootReducer from './reducers';

import * as serviceWorker from './serviceWorker';

const store = createStore(persistReducer({ key: 'root', storage, whitelist: ['user'] }, rootReducer));
const persistor = persistStore(store);

render(<Root store={store} persistor={persistor} />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
