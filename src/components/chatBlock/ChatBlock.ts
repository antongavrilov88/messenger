import Block from '../../utils/Block.js'
import { tpl } from './template.js'


class DummyChatBlock extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            messages:  this.props ? this.props.messages : null,
            messageHandler: this.props ? this.props.messageHandler : null
        })
    }
}
export default DummyChatBlock