import validateInput  from './validateInput.js'
interface formField extends HTMLElement {
    name: string,
    value: number | string
}
declare global {
    interface Window {
      validateForm: (form: HTMLFormElement) => boolean
    }
  }

export function validateForm( form: HTMLFormElement ) {
    let myForm = form
    let myFormFields: any = myForm.getElementsByTagName( "input" )
    let status: boolean = true
    for ( let i = 0; i < myFormFields.length; i++ ) {
        validateInput(myFormFields[i]) ? null : status = false
    }
    return status
}
window.validateForm = validateForm