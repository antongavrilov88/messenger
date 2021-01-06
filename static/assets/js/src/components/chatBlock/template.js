export const tpl = `<div class="chat-container">
                            <div class="chat-container__interlocutor-container" id='changeChatAvatarButton'>
                                <div class="chat-container__interlocutor-container__avatar-container">
                                <img src="{{currentChatAvatar}}" height="60px;" width="60px;" style="border-radius: 30px;"/>
                                </div>
                            <div class="chat-container__interlocutor-container__name">
                                <p>{{currentChatTitle}}</p>
                            </div>
                            </div>
                            <hr>
                            <div class="messages-container">
                                {{#each messages}}
                                <div class="{{this.containerClass}}">
                                    <div class="{{this.boxClass}}">
                                        <p>{{this.message}}</p>
                                    </div>
                                </div>
                                {{/each}}
                            </div>
                            <hr>
                            <div class="message-form__container">
                            <form class="message-form" id="messageForm">
                                <div class="message-form__file-attache-button">
                                    &#128247;
                                </div>
                                <div class="message-form__message-input__container">
                                    <input class="message-form__message-input" type="text" name="message" />
                                </div>
                                <button class="message-form__send-button" type="submit"
                                    onclick="{{messageHandler}}">
                                    &#10148;
                                </button>
                            </form>
                        </div>
                    </div>`;
//# sourceMappingURL=template.js.map