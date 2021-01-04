import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class ChangePassword extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            id: this.props.id,
            formHandler: this.props.formHandler,
            inputHandler: this.props.inputHandler,
            submitButton: this.props.submitButton.render()
        });
    }
}
export default ChangePassword;
//# sourceMappingURL=ChangePassword.js.map