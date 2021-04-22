import {ActionsType, FOLLOW, SET_USERS, UNFOLLOW, UsersPageType, UsersType} from "./store";

let initialState = {
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
};

const usersReducer = (state: UsersPageType = initialState, action: ActionsType) => {
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
            return  {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users} as const);

export default usersReducer;