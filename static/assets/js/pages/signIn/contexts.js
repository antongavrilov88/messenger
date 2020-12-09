import formHandler from '../../utils/manageForm.js';
import funcString from '../../utils/funcString.js';
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
            }
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
            }
        }
    ],
    handler: funcString(formHandler, 'this.parentNode')
};
//# sourceMappingURL=contexts.js.map