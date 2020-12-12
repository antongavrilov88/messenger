import Block from '../../utils/Block.js'
import formHandler from '../../utils/manageForm.js'
import validateInput from '../../utils/validateInput.js'
import { tpl } from './template.js'
import { ChangePasswordProps } from './types.js'

class ChangePassword extends Block<ChangePasswordProps> {
    constructor(props: ChangePasswordProps) {
        super("div", props)
    }
    
    componentDidMount() {
        window.formHandler = formHandler
        window.validateInput = validateInput
    }

    render() {
        return this.compile(tpl, {
            formHandler: this.props.formHandler,
            inputHandler: this.props.inputHandler,
            submitButton: this.props.submitButton.render()
        })
    }
}
export default ChangePassword