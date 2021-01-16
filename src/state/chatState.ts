export const chatStore = (state: any) => {
	return {
		...state,
		chats: {
			data: null,
			listUpdated: false
		},
		chat: {
			users: null,
			listUpdated: false
		},
		usersToAdd: [],
		currentChatToken: null,
		currentChat: {}
	};
};
