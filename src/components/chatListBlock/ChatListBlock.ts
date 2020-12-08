import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ChatListBlock extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props.child.map(child => child.render()).join('')
        })
    }
}
export default ChatListBlock