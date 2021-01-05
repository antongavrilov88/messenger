import Block from '../../utils/Block'
import { tpl } from './template'
import { ChatBlockProps } from './types'


class ChatBlock extends Block<ChatBlockProps> {
    constructor(props: ChatBlockProps) {
        super("div", props)
    }


    render() {
        return this.compile(tpl, {
            messages:  this.props.messages,
            messageHandler: this.props.messageHandler,
            currentChatTitle: this.props.currentChatTitle,
            currentChatAvatar: this.props.currentChatAvatar
        })
    }
}
export default ChatBlock