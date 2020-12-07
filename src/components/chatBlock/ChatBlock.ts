import Block from '../../utils/Block.js'
import { tpl } from './template.js'


class DummyChatBlock extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            messages: this.props.messages
        })
    }
}
export default DummyChatBlock