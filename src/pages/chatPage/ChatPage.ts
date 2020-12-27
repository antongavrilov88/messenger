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
import Store from '../../utils/Store.js'
import AuthAPI from '../../API/AuthAPI.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_LOAD, ON_LOGOUT } from '../../actions.js'
import { router } from '../index.js'

let store = Store.getInstance()

let authAPI = new AuthAPI

const updateState = {
    onLogout: (payload: any) => {
        stateUpdater({type: ON_LOGOUT, payload: payload})
    },
    onLoad: (payload: any) => {
        stateUpdater({type: ON_LOAD, payload: payload})
    }
}

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
    
    show() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
        render( '.app', this )        
    }

    hide() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
    }

    addListeners() {
        let button = document.getElementById('logoutHeaderButton')
        button?.addEventListener('click',function() {
            updateState.onLogout(authAPI.logout())
            router.go('/')
        })
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default ChatPage