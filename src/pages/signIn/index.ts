import { render } from '../../utils/render.js'
import SignIn from './SignIn.js'


const signIn = new SignIn({
    content: ''
})

render(".app", signIn)