import Block from '../../utils/Block.js'
import formHandler from '../../utils/manageForm.js'
import validateInput from '../../utils/validateInput.js'
import { tpl } from './template.js'

class ChangePassword extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    componentDidMount() {
        window.validateInput = validateInput
        window.formHandler = formHandler
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