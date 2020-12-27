import Button from "../button/Button"

export type ChatProps = {
    name: string;
    message: string;
    time: string;
}

export type ChatListProps = {
    chats: ChatProps[];
    createButton: Button
}