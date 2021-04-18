import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {DialogsPageType, StoreType} from "../../redux/store";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state: DialogsPageType = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    let onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }
                    return (
                        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                 dialogsPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;