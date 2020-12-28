import { ON_CREATE_CHAT, ON_CHAT_LIST_LOAD } from '../actions.js'
import state from '../state/State.js'
import Store from '../utils/Store.js'

export const chatStateUpdater = (action: any) => {
    switch (action.type) {
        case ON_CREATE_CHAT:
            Store.setState({
                chats: {
                    ...state.chats,
                    chatCreated: true
                }
            })
        case ON_CHAT_LIST_LOAD:
            Store.setState({
                chats: {
                    data: action.payload.reason ? [] : action.payload,
                    chatCreated: false
                }
            })
            break
        default:
            break;
    }
}