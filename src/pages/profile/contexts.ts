import formHandler from '../../utils/manageForm.js'
import funcString  from '../../utils/funcString.js'
import validateInput from '../../utils/validateInput.js'
import { closeModal, openModal } from '../../utils/manageModal.js'
import Button from '../../components/button/Button.js'

export const submitButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    e: 'click',
    handler: funcString(formHandler, 'this.parentNode'),
    text: 'Изменить'
}

export const profileCTX = {
    id: 'changeProfileForm',
    submitButton: new Button(submitButtonCTX),
    profileData: [
        {
            label: 'Имя',
            inputType: 'text',
            inputName: 'first_name',
            inputPlaceholder: 'имя',
            handler: funcString(validateInput, 'this')
        },
        {
            label: 'Фамилия',
            inputType: 'text',
            inputName: 'second_name',
            inputPlaceholder: 'Фамилия',
            handler: funcString(validateInput, 'this')
        },
        {
            label: 'Псевдоним',
            inputType: 'text',
            inputName: 'display_name',
            inputPlaceholder: 'ник',
            handler: funcString(validateInput, 'this')
        },
        {
            label: 'Логин',
            inputType: 'text',
            inputName: 'login',
            inputPlaceholder: 'Логин',
            handler: funcString(validateInput, 'this')
        },
        {
            label: 'E-mail',
            inputType: 'email',
            inputName: 'email',
            inputPlaceholder: 'mail',
            handler: funcString(validateInput, 'this')
        },
        {
            label: 'Телефон',
            inputType: 'text',
            inputName: 'phone',
            inputPlaceholder: '+7-925-777-77-77',
            handler: funcString(validateInput, 'this')
        }
    ],
    formHandler: funcString(formHandler, 'this.parentNode'),
    modalHandler: funcString(openModal, "'changeAvatarModal'")
}
export const returnBlockCTX = {
    linkUrl: "./chat.html"
}
export const modalCTX = {
    id: 'avatarForm',
    modalHandler: funcString(closeModal, "'changeAvatarModal'")
}