import ChatList from '../../components/chatList/ChatList'
import Block from '../../utils/Block'
import ChatListHeaderLink from '../../components/chatListHeaderLink/ChatListHeaderLink'
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace'
import { tpl } from './template'
import { chatListCTX, dummyChatCTX  } from './contexts'
import ChatListBlock from '../../components/chatListBlock/ChatListBlock'
import DummyChatBlock from '../../components/dummyChatBlock/DummyChatBlock'
import { ChatListPageProps } from './types'
import { render } from '../../utils/render'

class ChatListPage extends Block<ChatListPageProps> {
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
        })
    }

    show() {
        render( '.app', this )
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render() 
        })
    }
}
export default ChatListPage