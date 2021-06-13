import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileType, profileReducer} from "./profile-reducer";
import {ActionDialogType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer, {ActionUsersType} from "./users-reducer";
import authReducer, {ActionAuthType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {FormAction, reducer as formReducer} from "redux-form"
import appReducer, {ActionInitializedType} from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStateType = ReturnType<typeof reducers>

export type AppActionsType =
    ActionAuthType
    | ActionDialogType
    | ActionProfileType
    | ActionUsersType
    | FormAction
    | ActionInitializedType;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

export default store;