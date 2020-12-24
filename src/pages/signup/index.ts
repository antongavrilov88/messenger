import { render } from '../../utils/render.js'
import SignUp from './SignUp.js'

const signUp = new SignUp()


render(".app", signUp)

let formH: EventListener = signUp.formHandler
let form: Node = document.getElementById('signUpForm')!
form.addEventListener('submit', formH)