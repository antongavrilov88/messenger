import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatListProps } from './types.js'

class ChatList extends Block<ChatListProps> {
    constructor(props: ChatListProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            chats: this.props.chats,
            createButton: this.props.createButton.render()
        })
    }
}
export default ChatList