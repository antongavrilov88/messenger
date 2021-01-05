import Button from "../../components/button/Button.js";
const createButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    text: 'Новый чат',
    id: 'newChatCreateButton'
};
export const dummyChatCTX = {
    text: 'Нужно выбрать чат, чтобы отправлять сообщения'
};
export const chatListCTX = {
    header: {
        logoutText: 'Выйти',
        linkUrl: './profile.html',
        linkText: 'Профиль'
    },
    chats: [],
    createButton: new Button(createButtonCTX)
};
//# sourceMappingURL=contexts.js.map