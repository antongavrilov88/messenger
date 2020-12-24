import ChangePasswordPage from './ChangePasswordPage.js'
import { render } from '../../utils/render.js'

const changePasswordPage = new ChangePasswordPage()

render(".app", changePasswordPage)

let formH: EventListener = changePasswordPage.formHandler
let form: Node = document.getElementById('changePasswordForm')!
form.addEventListener('submit', formH)