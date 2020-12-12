import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class ChatBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            messages: this.props ? this.props.messages : null,
            messageHandler: this.props ? this.props.messageHandler : null
        });
    }
}
export default ChatBlock;
//# sourceMappingURL=ChatBlock.js.map