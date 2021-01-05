import formHandler from "../../utils/manageForm.js";
import funcString from "../../utils/funcString.js";
import validateInput from "../../utils/validateInput.js";
import Button from "../../components/button/Button.js";
export const submitButtonCTX = {
    className: 'form__submit-button',
    type: '',
    e: 'click',
    handler: funcString(formHandler, 'this.parentNode'),
    text: 'Регистрация',
    id: 'signUpButton'
};
export const formCTX = {
    className: "form-container",
    id: "signUpForm",
    title: "Авторизация",
    submitButton: new Button(submitButtonCTX),
    inputs: [
        {
            lable: {
                className: "form__input__name",
                title: "ИМЯ"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "first_name"
            },
            handler: funcString(validateInput, 'this')
        },
        {
            lable: {
                className: "form__input__name",
                title: "ФАМИЛИЯ"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "second_name"
            },
            handler: funcString(validateInput, 'this')
        },
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
                title: "E-MAIL"
            },
            input: {
                className: "form__input",
                type: "email",
                name: "email",
                placeholder: "abcd@efg.hi"
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
        },
        {
            lable: {
                className: "form__input__name",
                title: "Телефон"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "phone",
                placeholder: "+7 (777) 777-77-77"
            },
            handler: funcString(validateInput, 'this')
        }
    ]
};
//# sourceMappingURL=contexts.js.map