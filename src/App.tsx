import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import Preloader from "./Components/common/Preolader/Preloader";
import {initializeApp} from "./redux/app-reducer";


type MapStateToPropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchPropsType;

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/dialogs"
                               render={() =>
                                   <DialogsContainer/>}/>
                        <Route path="/profile/:userId?"
                               render={() =>
                                   <ProfileContainer/>}/>
                        <Route path="/users"
                               render={() =>
                                   <UsersContainer/>}/>
                        <Route path="/login"
                               render={() =>
                                   <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>);
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);


