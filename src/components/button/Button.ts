import Block from '../../utils/Block'
import { tpl } from './template'
import { ButtonProps } from './types'
class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super("button", props)
    }

    render() {
        return this.compile(tpl, {
            className: this.props.className,
            type: this.props.type,
            text: this.props.text,
            id: this.props.id
        })
    }
}
export default Button