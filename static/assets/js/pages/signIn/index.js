import { render } from '../../utils/render.js';
import SignIn from './SignIn.js';
import Form from '../../components/form/Form.js';
const formCTX = {
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
    ]
};
const form = new Form(formCTX);
const signInChildren = [
    {
        parentNodeSelector: '.container',
        node: form.getContent()
    }
];
const signIn = new SignIn({}, signInChildren);
render(".app", signIn);
//# sourceMappingURL=index.js.map