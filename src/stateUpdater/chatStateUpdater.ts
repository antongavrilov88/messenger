import { ON_CREATE_CHAT,
         ON_CHAT_LIST_LOAD,
         ON_DELETE_CHAT,
        ON_CHAT_USERS_LIST_LOAD } from '../actions'
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
        case ON_CHAT_USERS_LIST_LOAD:
            Store.setState({
                chat: {
                    users: action.payload.reason ? null : action.payload,
                    listUpdated: false
                }
            })
        default:
            break;
    }
}