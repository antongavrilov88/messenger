import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatListBlockProps } from './types'

class ChatListBlock extends Block {
    constructor(props: ChatListBlockProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.child.map((child: { render: () => any }) => child.render()).join('') : null
        })
    }
}
export default ChatListBlock