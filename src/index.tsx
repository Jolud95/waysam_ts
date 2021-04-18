import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateType} from "./redux/store";
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state: StateType = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
