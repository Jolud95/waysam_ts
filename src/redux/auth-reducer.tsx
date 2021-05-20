import {AuthType} from "./store";
import {authAPI} from "../API/api";


export const SET_USER_DATA = "SET_USER_DATA";

export type setAuthUserDataAction = {
    type: typeof SET_USER_DATA
    data: {
        userId: null | string
        login: null | string
        email: null | string
    }
}

let initialState: AuthType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action: setAuthUserDataAction): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserData = (userId: null | string, login: null | string, email: null | string): setAuthUserDataAction => ({type: SET_USER_DATA, data:{userId, login, email}});
export const getAuthUserData = () => {
    return (dispatch: (action: setAuthUserDataAction) => void) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, login, email));
                }
            });
    }
}

export default authReducer;