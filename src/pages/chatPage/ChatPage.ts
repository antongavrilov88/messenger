import ChatList from '../../components/chatList/ChatList.js'
import Block from '../../utils/Block.js'
import ChatListHeaderLink from '../../components/chatListHeaderLink/ChatListHeaderLink.js'
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch.js'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js'
import { tpl } from './template.js'
import { chatListCTX, chatCTX, modalCTX, modalFormCTX  } from './contexts.js'
import ChatListBlock from '../../components/chatListBlock/ChatListBlock.js'
import ChatBlock from '../../components/chatBlock/ChatBlock.js'
import { ChatPageProps } from './types.js'
import { render } from '../../utils/render.js'
import Store from '../../utils/Store.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_LOAD, ON_LOGOUT, ON_CREATE_CHAT, ON_CHAT_LIST_LOAD } from '../../actions.js'
import { router } from '../index.js'
import { API } from '../../API/mainAPI.js'
import { openModal } from '../../utils/manageModal.js'
import Modal from '../../components/modal/Modal.js'
import formHandler from '../../utils/manageForm.js'

let store = Store.getInstance()

const updateState = {
    onLogout: (payload: any) => {
        stateUpdater({type: ON_LOGOUT, payload: payload})
    },
    onLoad: (payload: any) => {
        stateUpdater({type: ON_LOAD, payload: payload})
    },
    onCreateChat: (payload: any) => {
        stateUpdater({type: ON_CREATE_CHAT, payload: payload})
    },
    onChatListLoad: (payload: any) => {
        stateUpdater({type: ON_CHAT_LIST_LOAD, payload: payload})
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
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    stateToProps(state: any) {
        this.setProps({
            content: new AuthWorkSpace({
                content: [
                    new ChatListBlock({
                    content: [                    
                        new ChatListHeaderLink(chatListCTX.header),
                        new ChatListHeaderSearch(chatListCTX),
                        new ChatList({...chatListCTX, chats: store.state.chats.data}),
                        new Modal(modalCTX)
                    ]
                }),
                new ChatBlock(chatCTX)
            ]
            }),
            auth: store.state.auth,
            chats: store.state.chats ? store.state.chats.data : null
        })
    }

    componentDidMount() {
        updateState.onLoad(API.auth.getUser())
        updateState.onChatListLoad(API.chat.getChatList())
    }

    componentDidUpdate() {
        if (this.props.auth && this.props.auth.status === false) {        
        router.go('/')
        }
        if (this.props.chats && this.props.chats.chatCreated === true) {
            updateState.onChatListLoad(API.chat.getChatList())
        }
        console.log(this.props.chats)
        return true
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

        let logoutButton = document.getElementById('logoutHeaderButton')
        logoutButton?.addEventListener('click', function() {
            updateState.onLogout(API.auth.logout())
        })

        let profileButton = document.getElementById('profileHeaderButton')
        profileButton?.addEventListener('click', function() {
            router.go('/profile')
        })

        let newChatButton = document.getElementById('newChatCreateButton')
        newChatButton?.addEventListener('click', function() {
            openModal('newChatModal')
        })

        let formH: EventListener = this.formHandler
        let form: Node | null = document.getElementById(modalFormCTX.id)
        if ( form ) {
            form.addEventListener('submit', formH)      
        }
    }
    
    formHandler = (ev: Event) => {
        ev.preventDefault()
        let res = formHandler(modalFormCTX.id)
        if (res) {
            updateState.onCreateChat(API.chat.createChat(res))
        }
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default ChatPage