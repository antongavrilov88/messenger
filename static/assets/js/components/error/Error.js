import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class Error extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            errorCode: this.props ? this.props.errorCode : null,
            errorMessage: this.props ? this.props.errorMessage : null
        });
    }
}
export default Error;
//# sourceMappingURL=Error.js.map