import Block from '../../utils/Block.js'
import ChangePassword from '../ChangePassword.js'
import { tpl } from './template.js'

class ChatListHeaderLink extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            linkUrl: this.props.linkUrl,
            linkText: this.props.linkText
        })
    }
}
export default ChatListHeaderLink