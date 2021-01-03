import ChatList from "../chatList/ChatList";
import ChatListHeaderLink from "../ChatListHeaderLink/ChatListHeaderLink";
import ChatListHeaderSearch from "../chatListHeaderSearch/ChatListHeaderSearch";

export type ChatListBlockProps = {
    content: ( ChatListHeaderLink | ChatListHeaderSearch | ChatList )[]
}