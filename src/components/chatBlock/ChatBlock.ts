import Block from '../../utils/Block.js'
import formHandler from '../../utils/manageForm.js'
import validateInput from '../../utils/validateInput.js'
import { tpl } from './template.js'
import { ChatBlockProps } from './types.js'


class ChatBlock extends Block {
    constructor(props: ChatBlockProps) {
        super("div", props)
    }

    componentDidMount() {
        window.formHandler = formHandler
        window.validateInput = validateInput
    }

    render() {
        return this.compile(tpl, {
            messages:  this.props ? this.props.messages : null,
            messageHandler: this.props ? this.props.messageHandler : null
        })
    }
}
export default ChatBlock