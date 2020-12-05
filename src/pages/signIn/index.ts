import { render } from '../../utils/render.js'
import SignIn from './SignIn.js'
import Form from '../../components/form/Form.js'


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

const signInChildren = [
    {
        parentNodeSelector: '.container',
        node: form.getContent()
    }
]

const signIn = new SignIn({}, signInChildren)

setTimeout( () => {
    signIn.setProps({
        id: 'PISKAAA'
    })
}, 4000)

setTimeout( () => {
    form.setProps({
        title: 'PISKAAA'
    })
}, 4000)

render(".app", signIn)
// render(".container", form)