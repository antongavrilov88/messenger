/* eslint-disable max-len */
export const tpl = `<div class="chat-list__container__list">
                        <ul id="chatList">
                        {{#each chats}}
                            <li class="chat-list__item" id="{{this.id}}">
                                <hr>
                                <div class="chat-list__item__avatar__container">
                                <img src="https://ya-praktikum.tech{{this.avatar}}" width="47px;" height="47px;" style="border-radius: 23.5px;" id="chat{{this.id}}Avatar"/>
                                </div>
                                <span class="chat-list__item__chat-author__container">{{this.title}}   <span class="chat-list__delete_button">&#10008;</span></span>
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
                    </div>`;
