import Block from '../utils/Block.js';
class ChatBlock extends Block {
    constructor(props, children) {
        super("div", props, children);
    }
    render() {
        return (`<div class="chat-container">
            </div>`);
    }
}
export default ChatBlock;
//# sourceMappingURL=ChatBlock.js.map