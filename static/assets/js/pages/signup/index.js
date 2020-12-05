import { render } from '../../utils/render.js';
import SignUp from './SignUp.js';
import Form from '../../components/form/Form.js';
const formCTX = {
    className: "form-container",
    id: "loginForm",
    title: "Авторизация",
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
            }
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
            }
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
            }
        },
        {
            lable: {
                className: "form__input__name",
                title: "E-MAIL"
            },
            input: {
                className: "form__input",
                type: "text",
                name: "email"
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
        },
        {
            lable: {
                className: "form__input__name",
                title: "ПАРОЛЬ"
            },
            input: {
                className: "form__input",
                type: "password",
                name: "phone"
            }
        }
    ]
};
const form = new Form(formCTX);
const signUpChildren = [
    {
        parentNodeSelector: '.container',
        node: form.getContent()
    }
];
const signIn = new SignUp({}, signUpChildren);
render(".app", signIn);
//# sourceMappingURL=index.js.map