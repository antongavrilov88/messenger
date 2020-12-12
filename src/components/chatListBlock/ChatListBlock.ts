import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatListBlockProps } from './types'

class ChatListBlock extends Block<ChatListBlockProps> {
    constructor(props: ChatListBlockProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.map((child: { render: () => any }) => child.render()).join('')
        })
    }
}
export default ChatListBlock