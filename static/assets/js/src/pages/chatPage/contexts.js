import formHandler from "../../utils/manageForm.js";
import funcString from "../../utils/funcString.js";
import Button from "../../components/button/Button.js";
import validateInput from "../../utils/validateInput.js";
import Form from "../../components/form/Form.js";
import { closeModal } from "../../utils/manageModal.js";
const createButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    text: 'Новый чат',
    id: 'newChatCreateButton'
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
};
export const modalButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    handler: funcString(formHandler, 'this.parentNode'),
    text: 'Новый чат',
    id: 'newChatSubmitButton'
};
export const modalFormCTX = {
    className: "form-container",
    id: "newChat",
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
};
export const newChatModalCTX = {
    id: 'newChatModal',
    modalHandler: funcString(closeModal, "'changeAvatarModal'"),
    form: new Form(modalFormCTX)
};
const addUserButtonCTX = {
    className: 'form__submit-button',
    type: '',
    e: 'click',
    text: 'Найти пользователя',
    id: 'newChatUserAddButton'
};
export const chatUsersListCTX = {
    header: {},
    usersToAdd: [],
    users: [
        {
            name: 'Денис',
            avatarPath: ''
        },
        {
            name: 'Мама',
            avatarPath: ''
        },
        {
            name: 'Папа',
            avatarPath: ''
        },
        {
            name: 'Драконы комитет',
            avatarPath: ''
        },
        {
            name: 'Друг',
            avatarPath: ''
        }
    ],
    addUserButton: new Button(addUserButtonCTX)
};
export const addChatUserModalButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    handler: funcString(formHandler, 'this.parentNode'),
    text: 'Найти пользователя',
    id: 'newChatUserSubmitButton'
};
export const addChatUserModalFormCTX = {
    className: "form-container",
    id: "newChatUser",
    title: "Поиск пользователя по логину",
    submitButton: new Button(addChatUserModalButtonCTX),
    inputs: [
        {
            lable: {
                className: "form__input__name",
                title: "Пользователь"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "login"
            },
            handler: funcString(validateInput, 'this')
        }
    ]
};
export const addChatUserModalCTX = {
    id: 'newChatUserModal',
    modalHandler: funcString(closeModal, "'newChatUserModal'"),
    form: new Form(addChatUserModalFormCTX)
};
export const changeChatAvatarModalButtonSubmitCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    handler: funcString(formHandler, 'this.parentNode'),
    text: 'Сменить аватар',
    id: 'changeChatAvatarButtonSubmit'
};
export const changeChatAvatarModalFormCTX = {
    className: "form-container",
    id: "changeChatAvatarForm",
    title: "Сменить аватар чата",
    submitButton: new Button(changeChatAvatarModalButtonSubmitCTX),
    inputs: [
        {
            lable: {
                className: "form__input__name",
                title: "Выберите файл"
            },
            input: {
                className: "form__input",
                type: "file",
                name: "avatar"
            },
            handler: funcString(validateInput, 'this')
        }
    ]
};
export const changeChatAvatarModalCTX = {
    id: 'changeChatAvatar',
    modalHandler: funcString(closeModal, "'changeChatAvatar'"),
    form: new Form(changeChatAvatarModalFormCTX)
};
//# sourceMappingURL=contexts.js.map