import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class Button extends Block {
    constructor(props) {
        super("button", props)
    }

    render() {
        return this.compile(tpl, {
            className: this.props.className,
            type: this.props.type,
            event: this.props.event,
            handler: this.props.handler,
            text: this.props.text
        })
    }
}
export default Button