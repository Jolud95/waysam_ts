import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchPropsType;


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
