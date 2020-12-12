import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ReturnBlockProps } from './types.js'

class ReturnBlock extends Block {
    constructor(props: ReturnBlockProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            linkUrl: this.props ? this.props.urlLink : null
        })
    }
}
export default ReturnBlock