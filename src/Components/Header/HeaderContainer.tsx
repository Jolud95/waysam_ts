import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropsType = {
    logout: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchPropsType;


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

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

export default connect(mapStateToProps, {logout})(HeaderContainer)
