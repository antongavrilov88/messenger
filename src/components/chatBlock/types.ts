export type MessageProps = {
    containerClass: string;
    boxClass: string,
    message: string
}

export type ChatBlockProps = {
    messageHandler: string,
    currentChatTitle: string,
    currentChatAvatar: string,
    currentChatMessages: MessageProps[],
}
