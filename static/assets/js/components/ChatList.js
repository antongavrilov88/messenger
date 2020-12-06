import Block from '../utils/Block.js';
class ChatList extends Block {
    constructor(props, children) {
        super("div", props, children);
    }
    render() {
        return (`<div class="chat-container">
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
export default ChatList;
//# sourceMappingURL=ChatList.js.map