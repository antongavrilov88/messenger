import { render } from '../../utils/render.js'
import SignIn from './SignIn.js'
import Form from '../../components/form/Form.js'
import formHandler from '../../utils/manageForm.js'


const handler = formHandler

console.log( handler )

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
    })

    const signIn = new SignIn({
        child: form.getContent()
    })

render(".app", signIn)
// render(".container", form)