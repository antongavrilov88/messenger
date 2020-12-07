import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class Form extends Block {
    constructor(props) {
        super('form', props);
    }
    render() {
        return this.compile(tpl, {
            inputs: this.props.inputs,
            className: this.props.className,
            id: this.props.id
        });
    }
}
export default Form;
//# sourceMappingURL=Form.js.map