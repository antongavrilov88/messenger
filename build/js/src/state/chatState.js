export const chatStore = (state) => {
    return Object.assign(Object.assign({}, state), { chats: {
            data: [],
            listUpdated: false
        } });
};
//# sourceMappingURL=chatState.js.map