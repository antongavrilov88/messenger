import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatBlockProps } from './types.js'


class ChatBlock extends Block<ChatBlockProps> {
    constructor(props: ChatBlockProps) {
        super("div", props)
    }


    render() {
        return this.compile(tpl, {
            messages:  this.props.messages,
            messageHandler: this.props.messageHandler
        })
    }
}
export default ChatBlock