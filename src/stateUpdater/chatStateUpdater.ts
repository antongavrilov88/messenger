/* eslint-disable no-unused-expressions */
import {ON_CREATE_CHAT,
	ON_CHAT_LIST_LOAD,
	ON_DELETE_CHAT,
	ON_CHAT_USERS_LIST_LOAD,
	ON_SEARCH_USER_BY_LOGIN,
	ON_ADD_CHAT_USER,
	ON_DELETE_USER_FROM_CHAT,
	ON_CHANGE_CHAT_AVATAR,
	ON_CHAT_LOADED,
	ON_MESSAGE_RECIEVED
} from '../actions';
import Store from '../utils/Store';
import {store} from '../state/State';

export const chatStateUpdater = (action: any) => {
	switch (action.type) {
		case ON_CREATE_CHAT:
		case ON_DELETE_CHAT:
		case ON_CHANGE_CHAT_AVATAR:
			Store.setState({
				...store.state,
				chats: {
					...store.state.chats,
					listUpdated: true
				}
			});
			break;
		case ON_CHAT_LIST_LOAD:
			Store.setState({
				...store.state,
				chats: {
					...store.state.chats,
					data: action.payload.reason ? null : action.payload,
					listUpdated: false
				}
			});
			break;
		case ON_CHAT_USERS_LIST_LOAD:
			Store.setState({
				...store.state,
				chat: {
					...store.state.chat,
					users: action.payload.reason ? null : action.payload,
					listUpdated: false
				},
				usersToAdd: []
			});
			break;
		case ON_SEARCH_USER_BY_LOGIN:
			Store.setState({
				...store.state,
				usersToAdd: action.payload.length === 0 ? [] : action.payload
			});
			break;
		case ON_ADD_CHAT_USER:
		case ON_DELETE_USER_FROM_CHAT:
			Store.setState({
				...store.state,
				chat: {
					...store.state.chat,
					listUpdated: true
				}
			});
			break;
		case ON_CHAT_LOADED:
			Store.setState({
				...store.state,
				currentChatToken: action.payload.reason ? null : action.payload.token,
				currentChatMessages: []
			});
			break;
		case ON_MESSAGE_RECIEVED:
			// eslint-disable-next-line no-case-declarations
			let message;
			action.payload.userId === store.state.user.id ?
				message = {
					containerClass: 'my-message-container',
					boxClass: 'my-message-box',
					message: JSON.parse(action.payload)
				} :
				message = {
					containerClass: 'interlocutor-message-container',
					boxClass: 'interlocutor-message-box',
					message: JSON.parse(action.payload)
				};
			Store.setState({
				...store.state,
				currentChatMessages:
				[
					...store.state.currentChatMessages,
					message
				]
			});
			break;
		default:
			break;
	}
};
