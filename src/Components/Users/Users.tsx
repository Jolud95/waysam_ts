import React from 'react';
import styles from './Users.module.css'
import avatar from "../../assets/images/avatar.png"
import {NavLink} from "react-router-dom";
import {ItemsType} from "../../API/api";
import Paginator from '../common/Paginator/Paginator';


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<ItemsType>
    onPageChanges: (pageNumber: number) => void
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    isFollowingProgress: Array<string>
}


let Users = (props: UsersPropsType) => {
    return <div>
        <Paginator currentPage={props.currentPage} onPageChanges={props.onPageChanges}
                   totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        {(props.users || []).map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                       <img src={u.photos.small !== null ? u.photos.small : avatar} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.isFollowingProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}>Unfollow</button>
                        : <button disabled={props.isFollowingProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}

export default Users;