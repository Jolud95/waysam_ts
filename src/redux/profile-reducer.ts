import {ProfilePageType, ProfileType} from "./statesType";
import {profileAPI, usersAPI} from "../API/api";
import {AppThunkType} from "./redux-store";


export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USERS";
export const SET_STATUS = "SET_STATUS";


export type AddPostAction = {
    type: typeof ADD_POST
    newPostText: string

}
export type setUserProfileAction = {
    type: typeof SET_USER_PROFILE
    profile: null | ProfileType
}
export type setStatusAction = {
    type: typeof SET_STATUS
    status: string
}

export type ActionProfileType = AddPostAction |  setUserProfileAction | setStatusAction

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 10},
    ],
    profile: null,
    status: ""
}

export const profileReducer = (state = initialState, action: ActionProfileType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 0}]
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

export const addPostActionCreator = (newPostText: string): AddPostAction=> ({type: ADD_POST, newPostText})
export const setUserProfile = (profile: null | ProfileType): setUserProfileAction  => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status: string): setStatusAction => ({type: SET_STATUS, status})

export const getUserProfile = (userId: string): AppThunkType => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getStatus = (userId: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status: string): AppThunkType => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}