import formHandler from '../../utils/manageForm.js'
import funcString  from '../../utils/funcString.js'
import Button from '../../components/button/Button.js'
import validateInput from '../../utils/validateInput.js'
import Form from '../../components/form/Form.js'
import { closeModal } from '../../utils/manageModal.js'

const createButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    // handler: funcString(formHandler, 'this.parentNode'),
    text: 'Новый чат',
    id: 'newChatCreateButton'
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

export const modalButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    handler: funcString(formHandler, 'this.parentNode'),
    text: 'Новый чат',
    id: 'newChatSubmitButton'
}

export const modalFormCTX = {
    className: "form-container",
    id: "loginForm",
    title: "Новый чат",
    submitButton: new Button(modalButtonCTX),
    inputs: [
        {
            lable: {
                className: "form__input__name",
                title: "Название чата"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "title"
            },
            handler: funcString(validateInput, 'this')
        }
    ]
}
export const modalCTX = {
    id: 'newChatModal',
    modalHandler: funcString(closeModal, "'changeAvatarModal'"),
    form: new Form(modalFormCTX)
}