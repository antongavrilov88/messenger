import Block from '../utils/Block.js';
class ChatListBlock extends Block {
    constructor(props, children) {
        super("div", props);
    }
    render() {
        return (`<div class="chat-list__container">
                    {{{linkBlock}}}
                    {{{searchBlock}}}
                    {{{chatListBlock}}}
            </div>`);
    }
}
export default ChatListBlock;
//# sourceMappingURL=ChatListBlock.js.map