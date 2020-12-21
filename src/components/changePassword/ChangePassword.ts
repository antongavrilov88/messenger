import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ChangePasswordProps } from './types.js'

class ChangePassword extends Block<ChangePasswordProps> {
    constructor(props: ChangePasswordProps) {
        super("div", props)
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