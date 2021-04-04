import s from "../Dialogs.module.css";
import {DialogsType, MessagesType} from "../../../redux/state";


const Message: React.FC<MessagesType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

export default Message;