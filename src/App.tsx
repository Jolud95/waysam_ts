import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";



const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs"
                           render={() =>
                               <DialogsContainer />}/>
                    <Route path="/profile/:userId?"
                           render={() =>
                               <ProfileContainer />}/>
                    <Route path="/users"
                           render={() =>
                               <UsersContainer />}/>
                </div>
            </div>
        </BrowserRouter>);
}
export default App;


