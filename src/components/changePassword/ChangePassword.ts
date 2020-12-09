import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ChangePassword extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            formHandler: this.props ? this.props.formHandler : null,
            inputHandler: this.props ? this.props.inputHandler : null,
            submitButton: this.props ? this.props.submitButton.render() : null
        })
    }
}
export default ChangePassword