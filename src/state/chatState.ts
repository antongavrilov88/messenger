export const chatStore = (state: any) => {
    return {
        ...state,
        chats: {
            data: [],
            chatCreated: false
        }
        
    }
}