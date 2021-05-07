import {UsersType} from "./store";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
export type setCurrentPageAction = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type setTotalUsersCountAction = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export type toggleIsFetchingAction = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export type ActionUsersType =
    FollowAction
    | UnfollowAction
    | SetUsersAction
    | setCurrentPageAction
    | setTotalUsersCountAction
    | toggleIsFetchingAction

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action: ActionUsersType): UsersType => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            debugger
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            debugger
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            debugger
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }

}

export const follow = (userId: number): FollowAction => ({type: FOLLOW, userId});
export const unfollow = (userId: number): UnfollowAction => ({type: UNFOLLOW, userId});
export const setUsers = (users: any[]): SetUsersAction  => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentPageAction => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountAction => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingAction => ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;