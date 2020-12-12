import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { DummyChatBlockProps } from './types.js'


class DummyChatBlock extends Block<DummyChatBlockProps> {
    constructor(props: DummyChatBlockProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            text: this.props.text
        })
    }
}
export default DummyChatBlock