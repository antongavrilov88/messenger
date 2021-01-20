export type MessageProps = {
    containerClass: string;
    boxClass: string,
    message: any,
    author: string
}

export type ChatBlockProps = {
    messageHandler: string,
    currentChatTitle: string,
    currentChatAvatar: string,
    currentChatMessages: MessageProps[],
}
