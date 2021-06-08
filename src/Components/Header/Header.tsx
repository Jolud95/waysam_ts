import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: null | string
    logout: () => void
}


const Header = (props: HeaderPropsType) => {
    return (

        <header className={s.header}>
            <img
                src="https://img.icons8.com/bubbles/2x/shortcuts.png"
                alt={"icon"}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
};
export default Header