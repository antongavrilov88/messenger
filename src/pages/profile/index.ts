import Profile from './Profile.js'
import { render } from '../../utils/render.js'

const profile = new Profile()

render(".app", profile)

let formH: EventListener = profile.avatarFormHandler
let form: Node = document.getElementById('avatarForm')!
form.addEventListener('submit', formH)
console.log('PISA', form)