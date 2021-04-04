import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import {addPost, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
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
                               <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/profile"
                           render={() =>
                               <Profile profilePage={props.state.profilePage}
                                        addPost={props.addPost}
                                        updateNewPostText={props.updateNewPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>);
}
export default App;


