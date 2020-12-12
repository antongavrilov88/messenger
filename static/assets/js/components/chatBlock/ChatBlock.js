import Block from '../../utils/Block.js';
import formHandler from '../../utils/manageForm.js';
import validateInput from '../../utils/validateInput.js';
import { tpl } from './template.js';
class ChatBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
        window.formHandler = formHandler;
        window.validateInput = validateInput;
    }
    render() {
        return this.compile(tpl, {
            messages: this.props.messages,
            messageHandler: this.props.messageHandler
        });
    }
}
export default ChatBlock;
//# sourceMappingURL=ChatBlock.js.map