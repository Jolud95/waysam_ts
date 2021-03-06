import {UsersType} from "./statesType";
import {ItemsType, usersAPI} from "../API/api";
import {AppThunkType} from "./redux-store";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type FollowAction = {
    type: typeof FOLLOW
    userId: string
}
export type UnfollowAction = {
    type: typeof UNFOLLOW
    userId: string
}
export type SetUsersAction = {
    type: typeof SET_USERS
    users: Array<ItemsType>
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
export type toggleIsFollowingProgressAction = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: string
}

export type ActionUsersType =
    FollowAction
    | UnfollowAction
    | SetUsersAction
    | setCurrentPageAction
    | setTotalUsersCountAction
    | toggleIsFetchingAction
    | toggleIsFollowingProgressAction

let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingProgress: []
};

const usersReducer = (state = initialState, action: ActionUsersType): UsersType => {
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
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress:
                    action.isFetching
                        ? [...state.isFollowingProgress, action.userId]
                        : state.isFollowingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }

}

export const followSuccess = (userId: string): FollowAction => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: string): UnfollowAction => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<ItemsType>): SetUsersAction => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentPageAction => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountAction => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingAction => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowingProgress = (isFetching: boolean, userId: string): toggleIsFollowingProgressAction => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
export const getUsers = (currentPage: number, pageSize: number): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const follow = (userId: string): AppThunkType => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId: string): AppThunkType => {
    return (dispatch)=> {
        dispatch(toggleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;