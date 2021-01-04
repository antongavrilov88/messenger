export const chatStore = (state: any) => {
    return {
        ...state,
        chats: {
            data: [],
            listUpdated: false
        }
        
    }
}