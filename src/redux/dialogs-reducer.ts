import {DialogsPageType} from "./statesType";

export const SEND_MESSAGE = "SEND-MESSAGE";

export type SendMessageAction = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export type ActionDialogType =  SendMessageAction

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
    ]
}

export const dialogsReducer = (state = initialState, action: ActionDialogType): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody: string): SendMessageAction => ({type: SEND_MESSAGE, newMessageBody})

