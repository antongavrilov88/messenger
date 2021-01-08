import { ON_CREATE_CHAT, ON_CHAT_LIST_LOAD, ON_DELETE_CHAT, ON_CHAT_USERS_LIST_LOAD, ON_SEARCH_USER_BY_LOGIN, ON_ADD_CHAT_USER, ON_DELETE_USER_FROM_CHAT, ON_CHANGE_CHAT_AVATAR } from "../actions.js";
import Store from "../utils/Store.js";
export const chatStateUpdater = (action) => {
    switch (action.type) {
        case ON_CREATE_CHAT:
        case ON_DELETE_CHAT:
        case ON_CHANGE_CHAT_AVATAR:
            Store.setState({
                chats: {
                    listUpdated: true
                }
            });
            break;
        case ON_CHAT_LIST_LOAD:
            Store.setState({
                chats: {
                    data: action.payload.reason ? null : action.payload,
                    listUpdated: false
                }
            });
            break;
        case ON_CHAT_USERS_LIST_LOAD:
            Store.setState({
                chat: {
                    users: action.payload.reason ? null : action.payload,
                    listUpdated: false
                },
                usersToAdd: []
            });
            break;
        case ON_SEARCH_USER_BY_LOGIN:
            Store.setState({
                usersToAdd: action.payload.length === 0 ? [] : action.payload
            });
            break;
        case ON_ADD_CHAT_USER:
        case ON_DELETE_USER_FROM_CHAT:
            Store.setState({
                chat: {
                    listUpdated: true
                }
            });
            break;
        default:
            break;
    }
};
//# sourceMappingURL=chatStateUpdater.js.map