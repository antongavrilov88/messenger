import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const chatAPIInstance = new HTTP('/chats')

class ChatAPI extends BaseAPI {
    createChat(obj: object) {
        return chatAPIInstance.post('', obj)
    }
    getChatList() {
        return chatAPIInstance.get('')
    }
}
export default ChatAPI