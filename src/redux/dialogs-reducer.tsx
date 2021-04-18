import {ActionsType, DialogsPageType, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./store";

const initialState = {
    dialogs: [
        {id: 1, name: "Kate"},
        {id: 2, name: "Max"},
        {id: 3, name: "Sam"},
        {id: 4, name: "Olivia"},
        {id: 5, name: "Bob"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "I love you!"},
    ],
    newMessageBody: "",

}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body} as const)
