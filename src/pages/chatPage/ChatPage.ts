import ChatList from '../../components/chatList/ChatList'
import Block from '../../utils/Block'
import ChatListHeaderLink from '../../components/chatListHeaderLink/ChatListHeaderLink'
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace'
import { tpl } from './template'
import { chatListCTX, chatCTX, newChatModalCTX, modalFormCTX, chatUsersListCTX } from './contexts'
import ChatListBlock from '../../components/chatListBlock/ChatListBlock'
import ChatBlock from '../../components/chatBlock/ChatBlock'
import { ChatPageProps } from './types'
import { render } from '../../utils/render'
import Store from '../../utils/Store.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater'
import { ON_LOAD,
         ON_LOGOUT,
         ON_CREATE_CHAT,
         ON_CHAT_LIST_LOAD,
         ON_DELETE_CHAT,
        ON_CHAT_USERS_LIST_LOAD } from '../../actions'
import { router } from '../../index'
import { API } from '../../API/mainAPI'
import { openModal } from '../../utils/manageModal'
import Modal from '../../components/modal/Modal'
import formHandler from '../../utils/manageForm'
import ChatUsersListBlock from '../../components/chatUsersListBlock/ChatUsersListBlock'
import ChatUsersList from '../../components/chatUsersList/ChatUsersList'

let store = Store.getInstance()

const updateState = {
    onLogout: (payload: any) => {
        stateUpdater({ type: ON_LOGOUT, payload: payload })
    },
    onLoad: (payload: any) => {
        stateUpdater({ type: ON_LOAD, payload: payload })
    },
    onCreateChat: (payload: any) => {
        stateUpdater({ type: ON_CREATE_CHAT, payload: payload })
    },
    onChatListLoad: (payload: any) => {
        stateUpdater({ type: ON_CHAT_LIST_LOAD, payload: payload })
    },
    onDeleteChat: (payload: any) => {
        stateUpdater({ type: ON_DELETE_CHAT, payload: payload })
    },
    onChatUsersListLoad: (payload: any) => {
        stateUpdater({ type: ON_CHAT_USERS_LIST_LOAD, payload: payload })
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
                    new ChatBlock(chatCTX),
                    new ChatUsersListBlock({
                        content: [
                            new ChatUsersList(chatUsersListCTX)
                        ]
                    })
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
                            new ChatList({ ...chatListCTX, chats: store.state.chats.data })
                        ]
                    }),
                    new ChatBlock(chatCTX),
                    new ChatUsersListBlock({
                        content: [
                            new ChatUsersList(chatUsersListCTX)
                        ]
                    }),
                    new Modal(newChatModalCTX)
                ]
            }),
            auth: store.state.auth,
            chats: store.state.chats ? store.state.chats : null,
            chat: store.state.chat ? store.state.chat : null,
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
        if (this.props.chats && this.props.chats.listUpdated === true) {
            updateState.onChatListLoad(API.chat.getChatList())
        }
        console.log(this.props.chats, this.props.chat)
        return true
    }

    show() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
        render('.app', this)
    }

    hide() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
    }

    addListeners() {

        let logoutButton = document.getElementById('logoutHeaderButton')
        logoutButton?.addEventListener('click', function () {
            updateState.onLogout(API.auth.logout())
        })

        let profileButton = document.getElementById('profileHeaderButton')
        profileButton?.addEventListener('click', function () {
            router.go('/profile')
        })

        let newChatButton = document.getElementById('newChatCreateButton')
        newChatButton?.addEventListener('click', function () {
            openModal('newChatModal')
        })

        let formH: EventListener = this.formHandler
        let form: Node | null = document.getElementById(modalFormCTX.id)
        if (form) {
            form.addEventListener('submit', formH)
        }

        let chatList = document.getElementById('chatList')
        chatList?.addEventListener('click', function (e) {
            let target = e.target
            console.log('клик проходит')
            let deleteButton: HTMLElement = target as HTMLElement
            if (deleteButton && deleteButton.classList.contains('chat-list__delete_button')) {
                let chatToDeleteID = Number(deleteButton.closest('li')?.id)
                let obj = { data: JSON.stringify({ chatId: chatToDeleteID }) }
                updateState.onDeleteChat(API.chat.deleteChat(obj))
            }
            let chatListItem: HTMLElement = target as HTMLElement
            if (chatListItem && chatListItem.classList.contains('chat-list__item') && !chatListItem.classList.contains('chat-list__delete_button')) {
                let chatToGetUsersID = Number(chatListItem.id)
                updateState.onChatUsersListLoad(API.chat.getChatUsers(chatToGetUsersID))
            }
        })

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