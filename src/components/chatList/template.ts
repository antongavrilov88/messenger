export const tpl = `<div class="chat-list__container__list">
                        <ul>
                        {{#each chats}}
                            <li class="chat-list__item" id="{{this.id}}">
                                <hr>
                                <div class="chat-list__item__avatar__container">
                                </div>
                                <span class="chat-list__item__chat-author__container">{{this.title}}   <span>&#10008;</span></span>
                                <div class="chat-list__item__last-message__container">
                                {{this.created_by}}
                                </div>
                                <span class="chat-list__item__time">{{ this.time }}</span>
                            </li>
                        {{/each}}
                        </ul>
                        <div style="display: flex; justify-content: center;">
                            {{{createButton}}}
                        </div>
                    </div>`