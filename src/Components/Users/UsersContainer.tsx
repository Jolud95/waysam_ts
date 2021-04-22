import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {ActionsType, StateType, UsersType} from "../../redux/store";

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch:(action: ActionsType) => void)  => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UserContainer;