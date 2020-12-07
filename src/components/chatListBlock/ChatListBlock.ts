import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ChatListBlock extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            linkBlock: this.props.child[0].render(),
            searchBlock: this.props.child[1].render(),
            chatListBlock: this.props.child[2].render()
        })
    }
}
export default ChatListBlock