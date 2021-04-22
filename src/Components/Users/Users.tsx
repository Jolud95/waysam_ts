import styles from './Users.module.css'
import {StateType, UsersType} from "../../redux/store";

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    users: Array<UsersType>
}

let Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
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
        ])
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
        }
    </div>
}


export default Users;