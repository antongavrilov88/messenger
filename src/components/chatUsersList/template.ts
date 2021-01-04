export const tpl = `<div class="chat-users-list__container__list">
                        <span><h3>Участники чата</h3></span>
                        <ul id="chatUsersList">
                        {{#each users}}
                            <li class="chat-users-list__item" id="{{this.id}}">
                                <hr>
                                <div class="chat-users-list__item__avatar__container">
                                </div>
                                <span class="chat-users-list__item__chat-author__container">{{this.first_name}}  {{this.second_name}} <span class="chat-users-list__delete_button">&#10008;</span></span>
                                <div class="chat-users-list__item__last-message__container">
                                {{this.created_by}}
                                </div>
                                <span class="chat-users-list__item__time">{{ this.time }}</span>
                            </li>
                        {{/each}}
                        </ul>
                        <ul id="usersToAddList">
                        {{#each usersToAdd}}
                            <li class="chat-users-list__item" id="{{this.id}}">
                                <hr>
                                <div class="chat-users-list__item__avatar__container">
                                </div>
                                <span class="chat-users-list__item__chat-author__container">{{this.first_name}}  {{this.second_name}} <span class="chat-list__add-user_button">&#10004;</span></span>
                                <div class="chat-users-list__item__last-message__container">
                                {{this.created_by}}
                                </div>
                                <span class="chat-users-list__item__time">{{this.time}}</span>
                            </li>
                        {{/each}}
                        </ul>
                        <div style="display: flex; justify-content: center;">
                            {{{addUserButton}}}
                        </div>
                    </div>`