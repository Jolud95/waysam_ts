import {ActionProfileType} from "./profile-reducer";
import {ActionDialogType} from "./dialogs-reducer";
import {ActionUsersType} from "./users-reducer";

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
export type UsersType = {
    users: any[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
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
                    photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: false,
                    name: "Kate",
                    status: "I'll a programmer",
                    location: {city: "Volgograd", country: "Russia"}
                },
                {
                    id: 2,
                    photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: true,
                    name: "Max",
                    status: "I'm a good man",
                    location: {city: "Volgograd", country: "Russia"}
                },
                {
                    id: 3,
                    photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: false,
                    name: "Simon",
                    status: "I'm a cat",
                    location: {city: "Volgograd", country: "Russia"}
                },
                {
                    id: 4,
                    photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYKIeL4WvcPtmkxMi3U_JIQbbTcs-nR8vwQ&usqp=CAU",
                    followed: true,
                    name: "Olivia",
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
