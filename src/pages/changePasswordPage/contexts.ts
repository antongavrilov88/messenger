import formHandler from '../../utils/manageForm.js'
import funcString  from '../../utils/funcString.js'
import validateInput from '../../utils/validateInput.js'
import Button from '../../components/button/Button.js'


export const submitButtonCTX = {
    className: 'profile-info-container__submit-button',
    type: 'submit',
    e: 'click',
    handler: funcString(formHandler, 'this.parentNode'),
    text: 'Изменить',
    id: 'changePasswordSubmitButton'
}
export const returnBlockCTX = {
    linkUrl: "./profile"
}
export const changePasswordFormCTX = {
    id: 'changePasswordForm',
    formHandler: funcString(formHandler, 'this.parentNode'),
    inputHandler: funcString(validateInput, 'this'),
    submitButton: new Button(submitButtonCTX)
}