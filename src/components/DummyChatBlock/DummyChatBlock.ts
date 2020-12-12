import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { DummyChatBlockProps } from './types.js'


class DummyChatBlock extends Block {
    constructor(props: DummyChatBlockProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            text: this.props ? this.props.text : null
        })
    }
}
export default DummyChatBlock