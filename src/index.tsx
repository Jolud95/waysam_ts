import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, StateType, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from 'react-dom';
import App from "./App";

export let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

reportWebVitals();
