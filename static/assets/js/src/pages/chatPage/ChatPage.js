import ChatList from "../../components/chatList/ChatList.js";
import Block from "../../utils/Block.js";
import ChatListHeaderLink from "../../components/chatListHeaderLink/ChatListHeaderLink.js";
import ChatListHeaderSearch from "../../components/chatListHeaderSearch/ChatListHeaderSearch.js";
import AuthWorkSpace from "../../components/authWorkSpace/AuthWorkspace.js";
import { tpl } from "./template.js";
import { chatListCTX, chatCTX, newChatModalCTX, modalFormCTX, chatUsersListCTX, addChatUserModalCTX, changeChatAvatarModalCTX, changeChatAvatarModalFormCTX } from "./contexts.js";
import ChatListBlock from "../../components/chatListBlock/ChatListBlock.js";
import ChatBlock from "../../components/chatBlock/ChatBlock.js";
import { render } from "../../utils/render.js";
import { stateUpdater } from "../../stateUpdater/stateUpdater.js";
import { ON_LOAD, ON_LOGOUT, ON_CREATE_CHAT, ON_CHAT_LIST_LOAD, ON_DELETE_CHAT, ON_CHAT_USERS_LIST_LOAD, ON_SEARCH_USER_BY_LOGIN, ON_ADD_CHAT_USER, ON_DELETE_USER_FROM_CHAT, ON_CHANGE_CHAT_AVATAR } from "../../actions.js";
import { router } from "../../index.js";
import { API } from "../../API/mainAPI.js";
import { closeModal, openModal } from "../../utils/manageModal.js";
import Modal from "../../components/modal/Modal.js";
import formHandler from "../../utils/manageForm.js";
import ChatUsersListBlock from "../../components/chatUsersListBlock/ChatUsersListBlock.js";
import ChatUsersList from "../../components/chatUsersList/ChatUsersList.js";
import { store } from "../../state/State.js";
import Store from "../../utils/Store.js";
const updateState = {
    onLogout: (payload) => {
        stateUpdater({ type: ON_LOGOUT, payload: payload });
    },
    onLoad: (payload) => {
        stateUpdater({ type: ON_LOAD, payload: payload });
    },
    onCreateChat: (payload) => {
        stateUpdater({ type: ON_CREATE_CHAT, payload: payload });
    },
    onChatListLoad: (payload) => {
        stateUpdater({ type: ON_CHAT_LIST_LOAD, payload: payload });
    },
    onDeleteChat: (payload) => {
        stateUpdater({ type: ON_DELETE_CHAT, payload: payload });
    },
    onChatUsersListLoad: (payload) => {
        stateUpdater({ type: ON_CHAT_USERS_LIST_LOAD, payload: payload });
    },
    onSearchUserByLogin: (payload) => {
        stateUpdater({ type: ON_SEARCH_USER_BY_LOGIN, payload: payload });
    },
    onAddChatUser: (payload) => {
        stateUpdater({ type: ON_ADD_CHAT_USER, payload: payload });
    },
    onDeleteChatUser: (payload) => {
        stateUpdater({ type: ON_DELETE_USER_FROM_CHAT, payload: payload });
    },
    onChangeChatAvatar: (payload) => {
        stateUpdater({ type: ON_CHANGE_CHAT_AVATAR, payload: payload });
    }
};
class ChatPage extends Block {
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
                    new ChatBlock(Object.assign(Object.assign({}, chatCTX), { currentChatTitle: store.state.currentChat ? store.state.currentChat.title : 'Нужно выбрать чат' })),
                    new ChatUsersListBlock({
                        content: [
                            new ChatUsersList(chatUsersListCTX)
                        ]
                    })
                ]
            })
        });
        this.chatAvatarFormHandler = (event) => {
            event.preventDefault();
            const myUserForm = document.getElementById(changeChatAvatarModalFormCTX.id);
            const form = new FormData(myUserForm);
            form.append('chatId', store.state.currentChat.id);
            updateState.onChangeChatAvatar(API.chat.updateAvatar({ data: form }));
            closeModal('changeChatAvatar');
        };
        this.formHandler = (ev) => {
            ev.preventDefault();
            let res = formHandler(modalFormCTX.id);
            if (res) {
                updateState.onCreateChat(API.chat.createChat(res));
            }
        };
        this.addUserFormHandler = (ev) => {
            ev.preventDefault();
            let res = formHandler(addChatUserModalCTX.id);
            if (res) {
                updateState.onSearchUserByLogin(API.user.searchUser(res));
            }
        };
        this.stateToProps = this.stateToProps.bind(this);
        store.subscribe(this.stateToProps);
    }
    stateToProps(state) {
        this.setProps({
            content: new AuthWorkSpace({
                content: [
                    new ChatListBlock({
                        content: [
                            new ChatListHeaderLink(chatListCTX.header),
                            new ChatListHeaderSearch(chatListCTX),
                            new ChatList(Object.assign(Object.assign({}, chatListCTX), { chats: store.state.chats ? store.state.chats.data : null }))
                        ]
                    }),
                    new ChatBlock(Object.assign(Object.assign({}, chatCTX), { currentChatTitle: store.state.currentChat ? store.state.currentChat.title : 'Нужно выбрать чат' })),
                    new ChatUsersListBlock({
                        content: [
                            new ChatUsersList(Object.assign(Object.assign({}, chatUsersListCTX), { users: store.state.chat ? store.state.chat.users : null, usersToAdd: store.state.usersToAdd ? store.state.usersToAdd : [] }))
                        ]
                    }),
                    new Modal(newChatModalCTX),
                    new Modal(addChatUserModalCTX),
                    new Modal(changeChatAvatarModalCTX)
                ]
            }),
            auth: store.state.auth,
            chats: store.state.chats ? store.state.chats : null,
            chat: store.state.chat ? store.state.chat : null,
            usersToAdd: store.state.usersToAdd ? store.state.usersToAdd : []
        });
    }
    componentDidMount() {
        updateState.onLoad(API.auth.getUser());
        updateState.onChatListLoad(API.chat.getChatList());
    }
    componentDidUpdate() {
        if (this.props.auth && this.props.auth.status === false) {
            router.go('/');
            return true;
        }
        if (this.props.chats && this.props.chats.listUpdated === true) {
            updateState.onChatListLoad(API.chat.getChatList());
            return false;
        }
        if (this.props.chat && this.props.chat.listUpdated === true) {
            updateState.onChatUsersListLoad(API.chat.getChatUsers(store.state.currentChat.id));
            return false;
        }
        console.log(this.props ? this.props : null);
        return true;
    }
    show() {
        let root = document.querySelector('.app');
        root.innerHTML = '';
        render('.app', this);
    }
    hide() {
        let root = document.querySelector('.app');
        root.innerHTML = '';
    }
    addListeners() {
        let logoutButton = document.getElementById('logoutHeaderButton');
        logoutButton === null || logoutButton === void 0 ? void 0 : logoutButton.addEventListener('click', function () {
            updateState.onLogout(API.auth.logout());
        });
        let profileButton = document.getElementById('profileHeaderButton');
        profileButton === null || profileButton === void 0 ? void 0 : profileButton.addEventListener('click', function () {
            router.go('/profile');
        });
        let newChatButton = document.getElementById('newChatCreateButton');
        newChatButton === null || newChatButton === void 0 ? void 0 : newChatButton.addEventListener('click', function () {
            openModal('newChatModal');
        });
        let newChatUserAddButton = document.getElementById('newChatUserAddButton');
        newChatUserAddButton === null || newChatUserAddButton === void 0 ? void 0 : newChatUserAddButton.addEventListener('click', function () {
            openModal('newChatUserModal');
        });
        let formH = this.formHandler;
        let form = document.getElementById(modalFormCTX.id);
        if (form) {
            form.addEventListener('submit', formH);
        }
        let chatList = document.getElementById('chatList');
        chatList === null || chatList === void 0 ? void 0 : chatList.addEventListener('click', function (e) {
            var _a, _b, _c, _d;
            let target = e.target;
            let deleteButton = target;
            if (deleteButton && deleteButton.classList.contains('chat-list__delete_button')) {
                let chatToDeleteID = Number((_a = deleteButton.closest('li')) === null || _a === void 0 ? void 0 : _a.id);
                let obj = { data: JSON.stringify({ chatId: chatToDeleteID }) };
                updateState.onDeleteChat(API.chat.deleteChat(obj));
            }
            let chatListItem = target;
            if (chatListItem && !chatListItem.classList.contains('chat-list__delete_button')) {
                let chatToGetUsersID = Number((_b = chatListItem.closest('li')) === null || _b === void 0 ? void 0 : _b.id);
                const currentChatTitle = (_d = (_c = chatListItem.closest('li')) === null || _c === void 0 ? void 0 : _c.querySelector('.chat-list__item__chat-author__container')) === null || _d === void 0 ? void 0 : _d.textContent;
                Store.setState({ currentChat: { id: chatToGetUsersID, title: currentChatTitle } });
                updateState.onChatUsersListLoad(API.chat.getChatUsers(chatToGetUsersID));
            }
        });
        let addUserHandler = this.addUserFormHandler;
        let addUserForm = document.getElementById('newChatUser');
        if (addUserForm) {
            addUserForm.addEventListener('submit', addUserHandler);
        }
        let chatUsersList = document.getElementById('usersToAddList');
        chatUsersList === null || chatUsersList === void 0 ? void 0 : chatUsersList.addEventListener('click', function (e) {
            var _a;
            let target = e.target;
            let addButton = target;
            if (addButton && addButton.classList.contains('chat-list__add-user_button')) {
                let userToAddID = Number((_a = addButton.closest('li')) === null || _a === void 0 ? void 0 : _a.id);
                let obj = { data: JSON.stringify({ users: [Number(userToAddID)], chatId: Number(store.state.currentChat.id) }) };
                updateState.onAddChatUser(API.chat.addChatUser(obj));
            }
        });
        let usersToAddList = document.getElementById('chatUsersList');
        usersToAddList === null || usersToAddList === void 0 ? void 0 : usersToAddList.addEventListener('click', function (e) {
            var _a;
            let target = e.target;
            let deleteButton = target;
            if (deleteButton && deleteButton.classList.contains('chat-users-list__delete_button')) {
                let userToDeleteID = Number((_a = deleteButton.closest('li')) === null || _a === void 0 ? void 0 : _a.id);
                let obj = { data: JSON.stringify({ users: [Number(userToDeleteID)], chatId: Number(store.state.currentChat.id) }) };
                updateState.onDeleteChatUser(API.chat.deleteChatUser(obj));
            }
        });
        let changeChatAvatarButton = document.getElementById('changeChatAvatarButton');
        changeChatAvatarButton === null || changeChatAvatarButton === void 0 ? void 0 : changeChatAvatarButton.addEventListener('click', function () {
            openModal('changeChatAvatar');
        });
        let changeChatAvatarForm = document.getElementById('changeChatAvatarForm');
        changeChatAvatarForm === null || changeChatAvatarForm === void 0 ? void 0 : changeChatAvatarForm.addEventListener('submit', this.chatAvatarFormHandler);
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        });
    }
}
export default ChatPage;
//# sourceMappingURL=ChatPage.js.map