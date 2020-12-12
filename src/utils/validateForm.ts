import validateInput  from './validateInput.js'

function validateForm( form: HTMLFormElement ) {
    let myForm = form
    let myFormFields: any = myForm.getElementsByTagName( "input" )
    let status: boolean = true
    for ( let i = 0; i < myFormFields.length; i++ ) {
        if ( !validateInput(myFormFields[i]) ) {
          status = false
        }
    }
    return status
}
export default validateForm