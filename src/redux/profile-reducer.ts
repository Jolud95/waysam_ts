import {ProfilePageType, ProfileType} from "./store";


export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USERS";

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

export type ActionProfileType = AddPostAction | UpdateNewPostTextAction | setUserProfileAction

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 10},
    ],
    newPostText: "",
    profile: null
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
        default:
            return state;
    }
}

export const addPostActionCreator = (): AddPostAction=> ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextAction => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile: null | ProfileType): setUserProfileAction  => ({type: SET_USER_PROFILE, profile})