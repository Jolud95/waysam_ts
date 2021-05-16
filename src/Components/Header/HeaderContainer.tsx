import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: null | string, login: null | string, email: null | string) => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchPropsType;


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)
