import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChatBlockProps } from './types.js'


class ChatBlock extends Block {
    constructor(props: ChatBlockProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            messages:  this.props ? this.props.messages : null,
            messageHandler: this.props ? this.props.messageHandler : null
        })
    }
}
export default ChatBlock