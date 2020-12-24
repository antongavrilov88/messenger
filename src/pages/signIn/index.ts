import { render } from '../../utils/render.js'
import SignIn from './SignIn.js'

const signIn = new SignIn()

render(".app", signIn)

let formH: EventListener = signIn.formHandler
let form: Node = document.getElementById('loginForm')!
form.addEventListener('submit', formH)