import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import {ActionType, StateType, StoreType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => StateType
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() =>
                               <Dialogs store={props.store}/>}/>
                    <Route path="/profile"
                           render={() =>
                               <Profile profilePage={props.state.profilePage}
                                        dispatch={props.dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>);
}
export default App;


