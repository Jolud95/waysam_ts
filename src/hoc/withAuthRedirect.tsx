import {AppStateType} from "../redux/redux-store";
import {ComponentType} from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";


type MapStatePropsType = {
    isAuth: boolean
}


let mapStateToPropsRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
};

export function withAuthRedirect<T> (Component: ComponentType<T>)  {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props

            if (!props.isAuth) return <Redirect to={"/login"}/>

            return <Component {...restProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent;
}