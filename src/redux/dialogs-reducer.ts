import {DialogsPageType} from "./statesType";

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const SEND_MESSAGE = "SEND-MESSAGE";

export type NewMessageBodyAction = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type SendMessageAction = {
    type: typeof SEND_MESSAGE
}

export type ActionDialogType = NewMessageBodyAction | SendMessageAction

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state = initialState, action: ActionDialogType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: ""
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (): SendMessageAction => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: string): NewMessageBodyAction => ({type: UPDATE_NEW_MESSAGE_BODY, body})
