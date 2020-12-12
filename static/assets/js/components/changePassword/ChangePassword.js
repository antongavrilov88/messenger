import Block from '../../utils/Block.js';
import formHandler from '../../utils/manageForm.js';
import validateInput from '../../utils/validateInput.js';
import { tpl } from './template.js';
class ChangePassword extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
        window.formHandler = formHandler;
        window.validateInput = validateInput;
    }
    render() {
        return this.compile(tpl, {
            formHandler: this.props.formHandler,
            inputHandler: this.props.inputHandler,
            submitButton: this.props.submitButton.render()
        });
    }
}
export default ChangePassword;
//# sourceMappingURL=ChangePassword.js.map