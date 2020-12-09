import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class Form extends Block {
    constructor(props) {
        super('form', props);
    }
    render() {
        return this.compile(tpl, {
            title: this.props ? this.props.title : null,
            inputs: this.props ? this.props.inputs : null,
            className: this.props ? this.props.className : null,
            id: this.props ? this.props.id : null,
            inputHandler: this.props ? this.props.inputHandler : null,
            handler: this.props ? this.props.handler : null,
            submitButton: this.props ? this.props.submitButton.render() : null
        });
    }
}
export default Form;
//# sourceMappingURL=Form.js.map