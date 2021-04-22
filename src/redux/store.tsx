import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const SEND_MESSAGE = "SEND-MESSAGE";
export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type LocationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
export type SidebarType = {}
export type UsersPageType ={
    users: Array<UsersType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage: UsersPageType
}
export type ActionProfileType = AddPostAction | UpdateNewPostTextAction

export type AddPostAction = {
    type: typeof ADD_POST
}
export type UpdateNewPostTextAction = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type ActionDialogType = NewMessageBodyAction | SendMessageAction

export type NewMessageBodyAction = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type SendMessageAction = {
    type: typeof SEND_MESSAGE
}
export type FollowAction = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowAction = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUsersAction = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export type ActionUsersType = FollowAction | UnfollowAction | SetUsersAction

export type ActionsType = ActionProfileType | ActionDialogType | ActionUsersType;

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType ) => void
    getState: () => StateType
    subscribe: (callback: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}

/*let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 15},
                {id: 2, message: "It's my first post", likesCount: 10},
            ],
            newPostText: ""
        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: "Kate"},
                {id: 2, name: "Max"},
                {id: 3, name: "Sam"},
                {id: 4, name: "Olivia"},
                {id: 5, name: "Bob"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "I love you!"},
            ],
            newMessageBody: "",
        },
        sidebar: {},
        usersPage: {
            users: [
                {
                    id: 1,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: false,
                    fullName: "Kate",
                    status: "I'll a programmer",
                    location: {city: "Volgograd", country: "Russia"}
                },
                {
                    id: 2,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: true,
                    fullName: "Max",
                    status: "I'm a good man",
                    location: {city: "Volgograd", country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: false,
                    fullName: "Simon",
                    status: "I'm a cat",
                    location: {city: "Volgograd", country: "Russia"}
                },
                {
                    id: 4,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: true,
                    fullName: "Olivia",
                    status: "I've a nice name",
                    location: {city: "Volgograd", country: "Russia"}
                }
            ]
        }
    },
    _callSubscriber(state: StateType) {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}*/

/*
export default store;*/
