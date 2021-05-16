import React from 'react';
import styles from './Users.module.css'
import avatar from "../../assets/images/avatar.png"
import {NavLink} from "react-router-dom";
import {ItemsType} from "../../redux/store";
import axios from "axios";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<ItemsType>
    onPageChanges: (pageNumber: number) => void
    unfollow: (userId: string) => void
    follow: (userId: string) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
    isFollowingProgress: Array<string>
}


let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map((p) => {
                return <span className={props.currentPage === p ? styles.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanges(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                       <img src={u.photos.small !== null ? u.photos.small : avatar} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "b98ff143-f3cc-4631-896c-6546eef7309a"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                });
                        }}>Unfollow</button>
                        : <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "b98ff143-f3cc-4631-896c-6546eef7309a"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id);
                                });
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