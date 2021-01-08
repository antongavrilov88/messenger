import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class Modal extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            id: this.props.id,
            form: this.props.form.render()
        });
    }
}
export default Modal;
//# sourceMappingURL=Modal.js.map