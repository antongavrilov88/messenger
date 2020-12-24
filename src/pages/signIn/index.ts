import { render } from '../../utils/render.js'
import SignIn from './SignIn.js'

const signIn = new SignIn()

render(".app", signIn)

let formH: EventListener = signIn.formHandler
let button: Node = document.querySelector('.form__submit-button')!
button.addEventListener('click', formH)