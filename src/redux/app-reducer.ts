import {getAuthUserData} from "./auth-reducer";
import {AppInitializedType} from "./statesType";
import {AppThunkType} from "./redux-store";


const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type initializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}

let initialState: AppInitializedType = {
    initialized: false
};
export type ActionInitializedType =  initializedSuccessType
const appReducer = (state = initialState, action: ActionInitializedType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = (): ActionInitializedType => ({
    type: INITIALIZED_SUCCESS
});
export const initializeApp = (): AppThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

export default appReducer;