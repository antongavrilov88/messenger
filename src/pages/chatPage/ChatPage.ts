import ChatList from '../../components/chatList/ChatList.js'
import Block from '../../utils/Block.js'
import ChatListHeaderLink from '../../components/chatListHeaderLink/ChatListHeaderLink.js'
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch.js'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js'
import { tpl } from './template.js'
import { chatListCTX, chatCTX  } from './contexts.js'
import ChatListBlock from '../../components/chatListBlock/ChatListBlock.js'
import ChatBlock from '../../components/chatBlock/ChatBlock.js'

class ChatPage extends Block {
    constructor() {
        super("div", {
            workspace: new AuthWorkSpace({
                child: [new ChatListBlock({
                    child: [                    
                        new ChatListHeaderLink(chatListCTX.header),
                        new ChatListHeaderSearch(chatListCTX),
                        new ChatList(chatListCTX)]
                }),
                new ChatBlock(chatCTX)
            ]
            })
        })
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.workspace.render() : null      
        })
    }
}
export default ChatPage