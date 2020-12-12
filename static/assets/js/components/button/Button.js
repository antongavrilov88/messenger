import Block from '../../utils/Block.js';
import { tpl } from './template.js';
import formHandler from '../../utils/manageForm.js';
class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    componentDidMount() {
        window.formHandler = formHandler;
    }
    render() {
        return this.compile(tpl, {
            className: this.props.className,
            type: this.props.type,
            e: this.props.e,
            handler: this.props.handler,
            text: this.props.text
        });
    }
}
export default Button;
//# sourceMappingURL=Button.js.map