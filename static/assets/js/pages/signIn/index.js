import { render } from '../../utils/render.js';
import SignIn from './SignIn.js';
import Form from '../../components/form/Form.js';
const signIn = new SignIn({});
const form = new Form({
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
        }
    ]
});
render(".app", signIn);
render(".container", form);
setTimeout(() => {
    form.setProps({
        id: 'pisunooooook',
    });
}, 10000);
//# sourceMappingURL=index.js.map