import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/statesType";


const DialogItem: React.FC<DialogsType> = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;