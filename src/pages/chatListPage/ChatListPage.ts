import ChatList from '../../components/chatList/ChatList.js'
import Block from '../../utils/Block.js'
import ChatListHeaderLink from '../../components/chatListHeaderLink/ChatListHeaderLink.js'
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch.js'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js'
import { tpl } from './template.js'
import { chatListCTX, dummyChatCTX  } from './contexts.js'
import ChatListBlock from '../../components/chatListBlock/ChatListBlock.js'
import DummyChatBlock from '../../components/dummyChatBlock/DummyChatBlock.js'
import { ChatListPageProps } from './types.js'

class ChatListPage extends Block<ChatListPageProps> {
    constructor() {
        super("div", {
            workspace: new AuthWorkSpace({
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
        })
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render() 
        })
    }
}
export default ChatListPage