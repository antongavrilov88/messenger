/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-negated-condition */
/* eslint-disable max-len */
import ChatList from '../../components/chatList/ChatList';
import Block from '../../utils/Block';
import ChatListHeaderLink from '../../components/ChatListHeaderLink/ChatListHeaderLink';
import ChatListHeaderSearch from '../../components/chatListHeaderSearch/ChatListHeaderSearch';
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace';
import {tpl} from './template';
import {
	chatListCTX, chatCTX,
	newChatModalCTX,
	modalFormCTX,
	chatUsersListCTX,
	addChatUserModalCTX,
	changeChatAvatarModalCTX,
	changeChatAvatarModalFormCTX
} from './contexts';
import ChatListBlock from '../../components/chatListBlock/ChatListBlock';
import ChatBlock from '../../components/chatBlock/ChatBlock';
import {ChatPageProps} from './types';
import {render} from '../../utils/render';
import {stateUpdater} from '../../stateUpdater/stateUpdater';
import {
	ON_LOAD,
	ON_LOGOUT,
	ON_CREATE_CHAT,
	ON_CHAT_LIST_LOAD,
	ON_DELETE_CHAT,
	ON_CHAT_USERS_LIST_LOAD,
	ON_SEARCH_USER_BY_LOGIN,
	ON_ADD_CHAT_USER,
	ON_DELETE_USER_FROM_CHAT,
	ON_CHANGE_CHAT_AVATAR,
	ON_CHAT_LOADED,
	ON_MESSAGE_RECIEVED
} from '../../actions';
import {router} from '../../index';
import {API} from '../../API/mainAPI';
import {closeModal, openModal} from '../../utils/manageModal';
import Modal from '../../components/modal/Modal';
import formHandler from '../../utils/manageForm';
import ChatUsersListBlock from '../../components/chatUsersListBlock/ChatUsersListBlock';
import ChatUsersList from '../../components/chatUsersList/ChatUsersList';
import {store} from '../../state/State';
import Store from '../../utils/Store';
import {toggleActiveClassName} from '../../utils/toggleActiveClassName';
import {socketHandler} from '../../utils/SocketHandler';

type RawMessageData = {
    containerClass: string;
    boxClass: string;
    message: any;
    author: any;
}

const updateState = {
	onLogout: (payload: any) => {
		stateUpdater({type: ON_LOGOUT, payload: payload});
	},
	onLoad: (payload: any) => {
		stateUpdater({type: ON_LOAD, payload: payload});
	},
	onCreateChat: (payload: any) => {
		stateUpdater({type: ON_CREATE_CHAT, payload: payload});
	},
	onChatListLoad: (payload: any) => {
		stateUpdater({type: ON_CHAT_LIST_LOAD, payload: payload});
	},
	onDeleteChat: (payload: any) => {
		stateUpdater({type: ON_DELETE_CHAT, payload: payload});
	},
	onChatUsersListLoad: (payload: any) => {
		stateUpdater({type: ON_CHAT_USERS_LIST_LOAD, payload: payload});
	},
	onSearchUserByLogin: (payload: any) => {
		stateUpdater({type: ON_SEARCH_USER_BY_LOGIN, payload: payload});
	},
	onAddChatUser: (payload: any) => {
		stateUpdater({type: ON_ADD_CHAT_USER, payload: payload});
	},
	onDeleteChatUser: (payload: any) => {
		stateUpdater({type: ON_DELETE_USER_FROM_CHAT, payload: payload});
	},
	onChangeChatAvatar: (payload: any) => {
		stateUpdater({type: ON_CHANGE_CHAT_AVATAR, payload: payload});
	},
	onGetToken: (payload: any) => {
		stateUpdater({type: ON_CHAT_LOADED, payload: payload});
	},
	onGetMessage: (payload: any) => {
		stateUpdater({type: ON_MESSAGE_RECIEVED, payload: payload});
	}
};

class ChatPage extends Block<ChatPageProps> {
	state: { socket: any; };
	constructor() {
		super('div', {
			content: new AuthWorkSpace({
				content: [
					new ChatListBlock({
						content: [
							new ChatListHeaderLink(chatListCTX.header),
							new ChatListHeaderSearch(chatListCTX),
							new ChatList(chatListCTX)
						]
					}),
					new ChatBlock({
						...chatCTX,
						currentChatTitle: store.state.currentChat ? store.state.currentChat.title : 'Нужно выбрать чат',
						currentChatAvatar: store.state.currentChat ? store.state.currentChat.avatar : null,
						currentChatMessages: store.state.currentChatMessages
					}),
					new ChatUsersListBlock({
						content: [
							new ChatUsersList(chatUsersListCTX)
						]
					})
				]
			})
		});
		this.stateToProps = this.stateToProps.bind(this);
		store.subscribe(this.stateToProps);
		this.state = {
			socket: null
		};
	}

	stateToProps() {
		this.setProps({
			content: new AuthWorkSpace({
				content: [
					new ChatListBlock({
						content: [
							new ChatListHeaderLink(chatListCTX.header),
							new ChatListHeaderSearch(chatListCTX),
							new ChatList({...chatListCTX, chats: store.state.chats ? store.state.chats.data : null})
						]
					}),
					new ChatBlock({
						...chatCTX,
						currentChatTitle: store.state.currentChat ? store.state.currentChat.title : 'Нужно выбрать чат',
						currentChatAvatar: store.state.currentChat ? store.state.currentChat.avatar : null,
						currentChatMessages: store.state.currentChatMessages
					}),
					new ChatUsersListBlock({
						content: [
							new ChatUsersList({...chatUsersListCTX, users: store.state.chat ? store.state.chat.users : null, usersToAdd: store.state.usersToAdd ? store.state.usersToAdd : []})
						]
					}),
					new Modal(newChatModalCTX),
					new Modal(addChatUserModalCTX),
					new Modal(changeChatAvatarModalCTX)
				]
			}),
			auth: store.state.auth,
			chats: store.state.chats !== this.props.chats ? store.state.chats : null,
			chat: store.state.chat !== this.props.chat ? store.state.chat : null,
			usersToAdd: store.state.usersToAdd !== this.props.usersToAdd ? store.state.usersToAdd : [],
			currentChatToken: store.state.currentChatToken !== this.props.currentChatToken ? store.state.currentChatToken : this.props.currentChatToken
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

		if (store.state.currentChat &&
			store.state.currentChat.id &&
			store.state.currentChatToken !== null &&
			store.state.currentChatToken !== undefined &&
			(this.props.currentChatToken !== store.state.currentChatToken)) {
			this.state.socket = socketHandler(`/${store.state.user.id}/${store.state.currentChat.id}/${store.state.currentChatToken}`);
			const socket = this.state.socket;
			socket.OPEN;
			socket.addEventListener('message', (event: { data: any; }) => {
				if (Array.isArray(JSON.parse(event.data))) {
					let messages: RawMessageData[] = [];
					JSON.parse(event.data).map((item: any) => {
						item.user_id === store.state.user.id ?
							messages.push({
								containerClass: 'my-message-container',
								boxClass: 'my-message-box',
								message: item,
								author: 'Me'
							}) :
							messages.push({
								containerClass: 'interlocutor-message-container',
								boxClass: 'interlocutor-message-box',
								message: item,
								author: store.state.chat.users.filter((friend: { id: any; }) => friend.id === item.user_id)[0].login
							});
					});
					updateState.onGetMessage(messages.reverse());
				}

				if (JSON.parse(event.data).type === 'message') {
					let message = [];
					JSON.parse(event.data).userId === store.state.user.id ?
						message.push({
							containerClass: 'my-message-container',
							boxClass: 'my-message-box',
							message: JSON.parse(event.data),
							author: 'Me'
						}) :
						message.push({
							containerClass: 'interlocutor-message-container',
							boxClass: 'interlocutor-message-box',
							message: JSON.parse(event.data),
							author: store.state.chat.users.filter((item: { id: any; }) => item.id === JSON.parse(event.data).userId)[0].login
						});

					updateState.onGetMessage(message);
				}
			});
			return false;
		}
	}

	show() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
		render('.app', this);
	}

	hide() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
	}

	addListeners() {
		let logoutButton = document.getElementById('logoutHeaderButton');
		logoutButton?.addEventListener('click', function () {
			updateState.onLogout(API.auth.logout());
		});

		let profileButton = document.getElementById('profileHeaderButton');
		profileButton?.addEventListener('click', function () {
			router.go('/profile');
		});

		let newChatButton = document.getElementById('newChatCreateButton');
		newChatButton?.addEventListener('click', function () {
			openModal('newChatModal');
		});

		let newChatUserAddButton = document.getElementById('newChatUserAddButton');
		newChatUserAddButton?.addEventListener('click', function () {
			openModal('newChatUserModal');
		});

		let formH: EventListener = this.formHandler;
		let form: Node | null = document.getElementById(modalFormCTX.id);
		if (form) {
			form.addEventListener('submit', formH);
		}

		let chatList = document.getElementById('chatList');
		chatList?.addEventListener('click', function (e) {
			let target = e.target;
			let deleteButton: HTMLElement = target as HTMLElement;
			if (deleteButton && deleteButton.classList.contains('chat-list__delete_button')) {
				let chatToDeleteID = Number(deleteButton.closest('li')?.id);
				let obj = {data: JSON.stringify({chatId: chatToDeleteID})};
				updateState.onDeleteChat(API.chat.deleteChat(obj));
			}

			let chatListItem: HTMLElement = target as HTMLElement;
			if (chatListItem && !chatListItem.classList.contains('chat-list__delete_button')) {
				let chatToGetUsersID = Number(chatListItem.closest('li')?.id);
				const currentChatTitle = chatListItem.closest('li')?.querySelector('.chat-list__item__chat-author__container')?.textContent;
				const currentChatAvatar = document.getElementById(`chat${chatToGetUsersID}Avatar`) as unknown as HTMLImageElement;
				Store.setState({
					...store.state,
					currentChat: {
						...store.state.currentChat,
						id: chatToGetUsersID,
						title: currentChatTitle,
						avatar: currentChatAvatar?.src
					}
				});
				toggleActiveClassName(chatListItem.closest('li')!, 'active');
				updateState.onChatUsersListLoad(API.chat.getChatUsers(chatToGetUsersID));
				updateState.onGetToken(API.chat.getToken(store.state.currentChat.id));
			}
		});

		let addUserHandler: EventListener = this.addUserFormHandler;
		const addUserForm: Node | null = document.getElementById('newChatUser');
		if (addUserForm) {
			addUserForm.addEventListener('submit', addUserHandler);
		}

		const chatUsersList = document.getElementById('usersToAddList');
		chatUsersList?.addEventListener('click', function (e) {
			const addButton = e.target as HTMLElement;
			if (addButton && addButton.classList.contains('chat-list__add-user_button')) {
				let userToAddID = Number(addButton.closest('li')?.id);
				let obj = {data: JSON.stringify({users: [Number(userToAddID)], chatId: Number(store.state.currentChat.id)})};
				updateState.onAddChatUser(API.chat.addChatUser(obj));
				return
			}
		});

		const usersToAddList = document.getElementById('chatUsersList');
		usersToAddList?.addEventListener('click', function (e) {
			const deleteButton = e.target as HTMLElement;
			if (deleteButton && deleteButton.classList.contains('chat-users-list__delete_button')) {
				let userToDeleteID = Number(deleteButton.closest('li')?.id);
				let obj = {data: JSON.stringify({users: [Number(userToDeleteID)], chatId: Number(store.state.currentChat.id)})};
				updateState.onDeleteChatUser(API.chat.deleteChatUser(obj));
				return
			}
		});

		const changeChatAvatarButton = document.getElementById('changeChatAvatarButton');
		changeChatAvatarButton?.addEventListener('click', function () {
			openModal('changeChatAvatar');
		});
		const changeChatAvatarForm = document.getElementById('changeChatAvatarForm');
		changeChatAvatarForm?.addEventListener('submit', this.chatAvatarFormHandler);
		const sendMessageForm = document.getElementById('messageForm');
		if (sendMessageForm) {
			sendMessageForm.addEventListener('submit', (e) => {
				e.preventDefault();
				const input = document.getElementById('messageInput') as HTMLInputElement | null;
				const socket = this.state.socket;
				if (socket.readyState !== 1) {
					socket.OPEN;
				}

				socket.send(JSON.stringify({
					content: input ? input.value : null,
					type: 'message'
				}));
			});
		}

		const chatBlock = document.querySelector('.messages-container');
		if (chatBlock) {
			chatBlock.scrollTop = chatBlock.scrollHeight;
		}
	}

	chatAvatarFormHandler = (event: Event) => {
		event.preventDefault();
		const myUserForm = document.getElementById(changeChatAvatarModalFormCTX.id) as HTMLFormElement;
		const form = new FormData(myUserForm);
		form.append('chatId', store.state.currentChat.id);
		updateState.onChangeChatAvatar(API.chat.updateAvatar({data: form}));
		closeModal('changeChatAvatar');
	}

	formHandler = (ev: Event) => {
		ev.preventDefault();
		let res = formHandler(modalFormCTX.id);
		if (res) {
			updateState.onCreateChat(API.chat.createChat(res));
		}
	}

	addUserFormHandler = (ev: Event) => {
		ev.preventDefault();
		let res = formHandler(addChatUserModalCTX.id);
		if (res) {
			updateState.onSearchUserByLogin(API.user.searchUser(res));
		}
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.render()
		});
	}
}
export default ChatPage;
