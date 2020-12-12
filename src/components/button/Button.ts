import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import formHandler from '../../utils/manageForm.js'
import { ButtonProps } from './types.js'

declare global {
    interface Window {
      formHandler: (form: HTMLFormElement) => void
    }
  }
class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super("button", props)
    }

    componentDidMount() {
        window.formHandler = formHandler
    }

    render() {
        return this.compile(tpl, {
            className: this.props.className,
            type: this.props.type,
            e: this.props.e,
            handler: this.props.handler,
            text: this.props.text
        })
    }
}
export default Button