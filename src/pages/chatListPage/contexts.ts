import Button from "../../components/button/Button"

const createButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    // handler: funcString(formHandler, 'this.parentNode'),
    text: 'Новый чат',
    id: 'newChatCreateButton'
}

export const dummyChatCTX = {
    text: 'Нужно выбрать чат, чтобы отправлять сообщения'      
}
export const chatListCTX = {
    header: {
        logoutText: 'Выйти',
        linkUrl: './profile.html',
        linkText: 'Профиль'
    },
    chats: [
        {
            name: 'Денис',
            message: 'Как дела?',
            time: '15:22'
        },
        {
            name: 'Мама',
            message: 'Что делаешь?',
            time: '15:22'
        },
        {
            name: 'Папа',
            message: 'Привет!',
            time: '15:22'
        },
        {
            name: 'Драконы комитет',
            message: 'Норм в цедлом',
            time: '15:22'
        },
        {
            name: 'Друг',
            message: 'Как дела?',
            time: '15:22'
        }
    ],
    createButton: new Button(createButtonCTX)     
}