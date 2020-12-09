import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ChatList extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            chats: this.props ? this.props.chats : null
        })
    }
}
export default ChatList