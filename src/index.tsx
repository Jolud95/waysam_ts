import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateType} from "./redux/state";
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./redux/state";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

reportWebVitals();
