import funcString  from '../../utils/funcString'
import validateInput from '../../utils/validateInput'
import Button from '../../components/button/Button'

export const switchFormButtonCTX = {
    className: 'account__switch-button',
    type: '',
    text: 'Еще нет аккаунта',
    id: 'switchToSignUpButton'    
}

export const submitButtonCTX = {
    className: 'form__submit-button',
    type: 'submit',
    text: 'Войти',
    id: 'signInButton'
}
export const formCTX = {
    className: "form-container",
    id: "loginForm",
    title: "Авторизация",
    submitButton: new Button(submitButtonCTX),
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
    ]
}