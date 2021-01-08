import HTTP from "../utils/HTTP.js";
import { BaseAPI } from "../utils/BaseAPI.js";
const chatAPIInstance = new HTTP('/chats');
class ChatAPI extends BaseAPI {
    createChat(obj) {
        return chatAPIInstance.post('', obj);
    }
    deleteChat(obj) {
        return chatAPIInstance.delete('', obj);
    }
    getChatList() {
        return chatAPIInstance.get('');
    }
    getChatUsers(id) {
        return chatAPIInstance.get(`/${id}/users`);
    }
    addChatUser(obj) {
        return chatAPIInstance.put('/users', obj);
    }
    deleteChatUser(obj) {
        return chatAPIInstance.delete('/users', obj);
    }
    updateAvatar(obj) {
        return chatAPIInstance.put('/avatar', Object.assign(Object.assign({}, obj), { headers: true }));
    }
}
export default ChatAPI;
//# sourceMappingURL=ChatAPI.js.map