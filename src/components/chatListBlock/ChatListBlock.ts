import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ChatListBlock extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.child.map((child: { render: () => any }) => child.render()).join('') : null
        })
    }
}
export default ChatListBlock