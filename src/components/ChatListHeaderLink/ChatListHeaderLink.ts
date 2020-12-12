import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatListHeaderLinkProps } from './types.js'

class ChatListHeaderLink extends Block {
    constructor(props: ChatListHeaderLinkProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            linkUrl: this.props ? this.props.linkUrl : null,
            linkText: this.props ? this.props.linkText : null
        })
    }
}
export default ChatListHeaderLink