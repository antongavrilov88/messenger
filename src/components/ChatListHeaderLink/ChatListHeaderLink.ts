import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatListHeaderLinkProps } from './types.js'

class ChatListHeaderLink extends Block<ChatListHeaderLinkProps> {
    constructor(props: ChatListHeaderLinkProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            logoutText: this.props.logoutText,
            linkUrl: this.props.linkUrl,
            linkText: this.props.linkText
        })
    }
}
export default ChatListHeaderLink