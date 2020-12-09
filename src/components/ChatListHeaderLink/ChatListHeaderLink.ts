import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ChatListHeaderLink extends Block {
    constructor(props: object | undefined) {
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