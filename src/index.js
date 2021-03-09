import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';

import store from './store';
import App from './App';
import i18n from './i18n';

import './index.css';

const persistor = persistStore(store);

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default store;
