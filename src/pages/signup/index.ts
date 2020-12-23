import { render } from '../../utils/render.js'
import SignUp from './SignUp.js'
import formHandler from '../../utils/manageForm.js'

const signUp = new SignUp()


render(".app", signUp)

let form = document.getElementById('signUpForm')
let myForm: HTMLFormElement = form as HTMLFormElement
let formH: EventListener = formHandler(myForm) as unknown as EventListener
let button: Node = document.querySelector('.form__submit-button')!
button.addEventListener('click', formH)