import ChatList from "../../components/chatList/ChatList.js";
import Block from "../../utils/Block.js";
import ChatListHeaderLink from "../../components/chatListHeaderLink/ChatListHeaderLink.js";
import ChatListHeaderSearch from "../../components/chatListHeaderSearch/ChatListHeaderSearch.js";
import AuthWorkSpace from "../../components/authWorkSpace/AuthWorkspace.js";
import { tpl } from "./template.js";
import { chatListCTX, dummyChatCTX } from "./contexts.js";
import ChatListBlock from "../../components/chatListBlock/ChatListBlock.js";
import DummyChatBlock from "../../components/dummyChatBlock/DummyChatBlock.js";
import { render } from "../../utils/render.js";
class ChatListPage extends Block {
    constructor() {
        super("div", {
            content: new AuthWorkSpace({
                content: [
                    new ChatListBlock({
                        content: [
                            new ChatListHeaderLink(chatListCTX.header),
                            new ChatListHeaderSearch(chatListCTX),
                            new ChatList(chatListCTX)
                        ]
                    }),
                    new DummyChatBlock(dummyChatCTX)
                ]
            })
        });
    }
    show() {
        render('.app', this);
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        });
    }
}
export default ChatListPage;
//# sourceMappingURL=ChatListPage.js.map