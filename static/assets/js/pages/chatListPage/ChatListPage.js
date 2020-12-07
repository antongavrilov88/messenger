import ChatList from '../../components/chatList/ChatList.js';
import Block from '../../utils/Block.js';
import ChatListHeaderLink from '../../components/ChatListHeaderLink/ChatListHeaderLink.js';
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch.js';
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js';
import { tpl } from './template.js';
import { chatListCTX } from './contexts.js';
import ChatListBlock from '../../components/chatListBlock/ChatListBlock.js';
class ChatListPage extends Block {
    constructor() {
        super("div", {
            workspace: new AuthWorkSpace({
                child: [new ChatListBlock({
                        child: [
                            new ChatListHeaderLink(chatListCTX),
                            new ChatListHeaderSearch(chatListCTX),
                            new ChatList(chatListCTX)
                        ]
                    })]
            })
        });
    }
    render() {
        return this.compile(tpl, {
            content: this.props.workspace.render()
        });
    }
}
export default ChatListPage;
//# sourceMappingURL=ChatListPage.js.map