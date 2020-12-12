import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import formHandler from '../../utils/manageForm.js'
import { ButtonProps } from './types.js'

declare global {
    interface Window {
      formHandler: (form: HTMLFormElement) => void
    }
  }
class Button extends Block {
    constructor(props: ButtonProps) {
        super("button", props)
    }

    componentDidMount() {
        window.formHandler = formHandler
    }

    render() {
        return this.compile(tpl, {
            className: this.props ? this.props.className : null,
            type: this.props ? this.props.type : null,
            e: this.props ? this.props.e : null,
            handler: this.props ? this.props.handler : null,
            text: this.props ? this.props.text : null
        })
    }
}
export default Button