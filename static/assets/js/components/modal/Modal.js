import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class Modal extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            modalHandler: this.props ? this.props.modalHandler : null
        });
    }
}
export default Modal;
//# sourceMappingURL=Modal.js.map