import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    render() {
        return this.compile(tpl, {
            className: this.props.className,
            type: this.props.type,
            text: this.props.text,
            id: this.props.id
        });
    }
}
export default Button;
//# sourceMappingURL=Button.js.map