import {ProfilePageType, ProfileType} from "./statesType";
import {profileAPI, usersAPI} from "../API/api";


export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USERS";
export const SET_STATUS = "SET_STATUS";


export type AddPostAction = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextAction = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type setUserProfileAction = {
    type: typeof SET_USER_PROFILE
    profile: null | ProfileType
}
export type setStatusAction = {
    type: typeof SET_STATUS
    status: string
}

export type ActionProfileType = AddPostAction | UpdateNewPostTextAction | setUserProfileAction | setStatusAction

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 10},
    ],
    newPostText: "",
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: state.newPostText, likesCount: 0}],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostAction=> ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextAction => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: null | ProfileType): setUserProfileAction  => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): setStatusAction => ({type: SET_STATUS, status})

export const getUserProfile = (userId: string) => {
    return (dispatch: (action: ActionProfileType) => void) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: (action: ActionProfileType) => void) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: (action: ActionProfileType) => void) => {
        profileAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}