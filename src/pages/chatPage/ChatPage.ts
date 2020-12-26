import ChatList from '../../components/chatList/ChatList.js'
import Block from '../../utils/Block.js'
import ChatListHeaderLink from '../../components/chatListHeaderLink/ChatListHeaderLink.js'
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch.js'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js'
import { tpl } from './template.js'
import { chatListCTX, chatCTX  } from './contexts.js'
import ChatListBlock from '../../components/chatListBlock/ChatListBlock.js'
import ChatBlock from '../../components/chatBlock/ChatBlock.js'
import { ChatPageProps } from './types.js'
import { render } from '../../utils/render.js'
import AuthAPI from '../../API/AuthAPI.js'

const authAPI= new AuthAPI

class ChatPage extends Block<ChatPageProps> {
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
                new ChatBlock(chatCTX)
            ]
            })
        })
    }
    
    componentDidMount() {
        setTimeout(() => {
            authAPI.logout()
        }, 3000);
    }

    show() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
        render( '.app', this )        
    }

    hide() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default ChatPage