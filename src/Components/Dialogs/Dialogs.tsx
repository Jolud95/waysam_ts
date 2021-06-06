import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/statesType";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls/FormsControls";


type DialogsPropsType = {
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
}
type ValuesType = {
    newMessageBody: string
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    let addNewMessage = (values: ValuesType) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}
const maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<ValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}
                       validate={[required, maxLength50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<ValuesType>({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;