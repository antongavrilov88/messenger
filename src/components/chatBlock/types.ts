export type MessageProps = {
    containerClass: string;
    boxClass: string,
    message: string
}

export type ChatBlockProps = {
    messages: MessageProps[],
    messageHandler: string,
    currentChatTitle: string,
    currentChatAvatar: string
}
