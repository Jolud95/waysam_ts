import {AuthType} from "./statesType";
import {authAPI} from "../API/api";
import {AppThunkType} from "./redux-store";




export const SET_USER_DATA = "SET_USER_DATA";

export type setAuthUserDataAction = {
    type: typeof SET_USER_DATA
    data: {
        userId: null | number
        login: null | string
        email: null | string
        isAuth: boolean
    }
}

let initialState: AuthType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

export type ActionAuthType =  setAuthUserDataAction;

const authReducer = (state = initialState, action: ActionAuthType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId: null | number, login: null | string, email: null | string, isAuth: boolean): setAuthUserDataAction => ({type: SET_USER_DATA, data:{userId, login, email, isAuth}});
export const getAuthUserData = ():AppThunkType => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email, true));
                }
            });
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                }
            });
    }
}
export const logout = (): AppThunkType => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}

export default authReducer;