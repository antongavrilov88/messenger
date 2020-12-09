import formHandler from '../../utils/manageForm.js'
import funcString  from '../../utils/funcString.js'
import validateInput from '../../utils/validateInput.js'

export const formCTX = {
    className: "form-container",
    id: "loginForm",
    title: "Авторизация",
    inputs: [
        {
            lable: {
                className: "form__input__name",
                title: "ЛОГИН"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "login"
            },
            handler: funcString(validateInput, 'this')
        },
        {
            lable: {
                className: "form__input__name",
                title: "ПАРОЛЬ"
            },
            input: {
                className: "form__input",
                type: "password",
                name: "password"
            },
            handler: funcString(validateInput, 'this')
        }
    ],
    handler: funcString(formHandler, 'this.parentNode')
}