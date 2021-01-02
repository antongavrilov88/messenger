import Block from '../../utils/Block'
import { tpl } from './template'
import { ChatListHeaderSearchProps } from './types'

class ChatListHeaderSearch extends Block<ChatListHeaderSearchProps> {
    constructor(props: ChatListHeaderSearchProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {})
    }
}
export default ChatListHeaderSearch