import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class Form extends Block {
    constructor(props) {
        super('form', props);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setProps({
                title: 'piska-pipiska'
            }),
                console.log('pisa', this.props.title);
        }, 3000);
    }
    render() {
        return this.compile(tpl, {
            title: this.props.title,
            inputs: this.props.inputs,
            className: this.props.className,
            id: this.props.id,
            inputHandler: this.props.inputHandler,
            handler: this.props.handler
        });
    }
}
export default Form;
//# sourceMappingURL=Form.js.map