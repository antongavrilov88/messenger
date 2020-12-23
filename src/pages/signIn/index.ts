import { render } from '../../utils/render.js'
import SignIn from './SignIn.js'
import formHandler from '../../utils/manageForm.js'

const signIn = new SignIn()

render(".app", signIn)

let form = document.getElementById('loginForm')
let myForm: HTMLFormElement = form as HTMLFormElement
let formH: EventListener = formHandler(myForm) as unknown as EventListener
let button: Node = document.querySelector('.form__submit-button')!
button.addEventListener('click', formH)