import Block from '../utils/Block.js';
class ChatListBlock extends Block {
    constructor(props, children) {
        super("div", props);
    }
    render() {
        return (`<div class="chat-list__container">
                    <div class="chat-list__container__profile-link"><a href="{{header.linkUrl}}">{{ header.linkText }}</a></div>
                    <div class="chat-list__search__container">
                        <input class="chat-list__search__input" placeholder="Поиск..." />
                    </div>
                    <div class="chat-list__container__list">
                        <ul>
                        {{#each chats}}
                            <li class="chat-list__item">
                                <hr>
                                <div class="chat-list__item__avatar__container">
                                </div>
                                <span class="chat-list__item__chat-author__container">{{ this.name }}</span>
                                <div class="chat-list__item__last-message__container">
                                {{ this.message }}
                                </div>
                                <span class="chat-list__item__time">{{ this.time }}</span>
                            </li>
                        {{/each}}
                        </ul>
                    </div>
            </div>`);
    }
}
export default ChatListBlock;
//# sourceMappingURL=ChatListBlock.js.map