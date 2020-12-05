import { render } from '../../utils/render.js'
import SignUp from './SignUp.js'
import Form from '../../components/Form.js'
import { formCTX } from './contexts.js'

const form = new Form(formCTX)

const signUpChildren = [
    {
        parentNodeSelector: '.container',
        node: form.getContent()
    }
]

const signIn = new SignUp({}, signUpChildren)

render(".app", signIn)