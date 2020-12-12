import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatListHeaderSearchProps } from './types.js'

class ChatListHeaderSearch extends Block {
    constructor(props: ChatListHeaderSearchProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {})
    }
}
export default ChatListHeaderSearch