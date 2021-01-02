import { ON_CREATE_CHAT, ON_CHAT_LIST_LOAD, ON_DELETE_CHAT } from '../actions'
import Store from '../utils/Store'

export const chatStateUpdater = (action: any) => {
    switch (action.type) {
        case ON_CREATE_CHAT:
        case ON_DELETE_CHAT:
            Store.setState({
                chats: {
                    listUpdated: true
                }
            })
        case ON_CHAT_LIST_LOAD:
            Store.setState({
                chats: {
                    data: action.payload.reason ? null : action.payload,
                    listUpdated: false
                }
            })
            break
        default:
            break;
    }
}