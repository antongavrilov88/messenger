import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    render() {
        return this.compile(tpl, {
            className: this.props ? this.props.className : null,
            type: this.props ? this.props.type : null,
            event: this.props ? this.props.event : null,
            handler: this.props ? this.props.handler : null,
            text: this.props ? this.props.text : null
        });
    }
}
export default Button;
//# sourceMappingURL=Button.js.map