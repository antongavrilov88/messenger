import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ButtonProps } from './types.js'
class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super("button", props)
    }

    render() {
        return this.compile(tpl, {
            className: this.props.className,
            type: this.props.type,
            e: this.props.e,
            // handler: this.props.handler,
            handler: '',
            text: this.props.text
        })
    }
}
export default Button