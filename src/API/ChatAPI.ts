import HTTP from '../utils/HTTP'
import { BaseAPI } from '../utils/BaseAPI'

const chatAPIInstance = new HTTP('/chats')

class ChatAPI extends BaseAPI {
    createChat(obj: object) {
        return chatAPIInstance.post('', obj)
    }
    deleteChat(obj: object) {
        return chatAPIInstance.delete('', obj)
    }
    getChatList() {
        return chatAPIInstance.get('')
    }
    getChatUsers(id: number) {
        return chatAPIInstance.get(`/${id}/users`)
    }
    addChatUser(obj: object) {
        return chatAPIInstance.put('/users', obj)
    }
}
export default ChatAPI