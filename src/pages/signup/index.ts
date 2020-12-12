import { render } from '../../utils/render.js'
import SignUp from './SignUp.js'
import formHandler from '../../utils/manageForm.js'
import funcString  from '../../utils/funcString.js'
import validateInput from '../../utils/validateInput.js'

const signUp = new SignUp()


render(".app", signUp)