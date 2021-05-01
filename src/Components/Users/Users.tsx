import React from 'react';
import styles from './Users.module.css'
import {UsersType} from "../../redux/store";
import avatar from "../../assets/images/avatar.png"
import axios from "axios";


type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType>
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={avatar} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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

}

export default Users;