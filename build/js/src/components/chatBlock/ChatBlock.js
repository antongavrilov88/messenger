import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class ChatBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            messages: this.props.messages,
            messageHandler: this.props.messageHandler,
            currentChatTitle: this.props.currentChatTitle,
            currentChatAvatar: this.props.currentChatAvatar
        });
    }
}
export default ChatBlock;
//# sourceMappingURL=ChatBlock.js.map