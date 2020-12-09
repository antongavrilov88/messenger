import formHandler from '../../utils/manageForm.js'
import funcString  from '../../utils/funcString.js'

export const chatListCTX = {
    header: {
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
}
export const chatCTX = {
    messages: [
        {
            containerClass: "interlocutor-message-container",
            boxClass: "interlocutor-message-box",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem sint minima natus sit odio in. Iure aliquid quos nobis magnam aliquam blanditiis saepe. Tempora beatae ea fuga ex eligendi?"
        },
        {
            containerClass: "my-message-container",
            boxClass: "my-message-box",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem sint minima natus sit odio in. Iure aliquid quos nobis magnam aliquam blanditiis saepe. Tempora beatae ea fuga ex eligendi?"
        },
        {
            containerClass: "interlocutor-message-container",
            boxClass: "interlocutor-message-box",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem sint minima natus sit odio in. Iure aliquid quos nobis magnam aliquam blanditiis saepe. Tempora beatae ea fuga ex eligendi?"
        },
        {
            containerClass: "my-message-container",
            boxClass: "my-message-box",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem sint minima natus sit odio in. Iure aliquid quos nobis magnam aliquam blanditiis saepe. Tempora beatae ea fuga ex eligendi?"
        },
    ],
    messageHandler: funcString(formHandler, 'this.parentNode')
}