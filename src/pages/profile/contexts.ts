import formHandler from '../../utils/manageForm.js'
import funcString  from '../../utils/funcString.js'
import validateInput from '../../utils/validateInput.js'

export const profileCTX = {
    profileData: [
        {
            label: 'Имя',
            inputType: 'text',
            inputName: 'fist_name',
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
    handler: funcString(formHandler, 'this.parentNode')
}
export const returnBlockCTX = {
    linkUrl: "./chat.html"
}