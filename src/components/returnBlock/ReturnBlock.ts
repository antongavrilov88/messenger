import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ReturnBlockProps } from './types.js'

class ReturnBlock extends Block<ReturnBlockProps> {
    constructor(props: ReturnBlockProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            linkUrl: this.props.urlLink
        })
    }
}
export default ReturnBlock