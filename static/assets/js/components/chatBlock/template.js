export const tpl = `<div class="chat-container">
                            <div class="chat-container__interlocutor-container">
                                <div class="chat-container__interlocutor-container__avatar-container">
                                </div>
                            <div class="chat-container__interlocutor-container__name">
                                <p>Имя собеседника</p>
                            </div>
                            </div>
                            <hr>
                            <div class="messages-container">
                                {{#each messages}}
                                <div class="{{ this.containerClass }}">
                                    <div class="{{ this.boxClass }}">
                                        <p>{{ this.message }}</p>
                                    </div>
                                </div>
                                {{/each}}
                            </div>
                            <hr>
                            <div class="message-form__container">
                            <form class="message-form" id="messageForm">
                                <div class="chat-container__file-attache-button">
                                    <h1>&#128247;</h1>
                                </div>
                                <div class="chat-container__message-input__container">
                                    <input class="chat-container__message-input" type="text" name="message" />
                                </div>
                                <button class="chat-container__send-button" type="submit"
                                    onclick="window.formHandler( 'messageForm' )">
                                    <h1>&#10148;</h1>
                                </button>
                            </form>
                        </div>
                    </div>`;
//# sourceMappingURL=template.js.map