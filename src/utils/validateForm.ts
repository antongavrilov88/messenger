import validateInput  from './validateInput'

function validateForm( form: HTMLFormElement ) {
    let myForm = form
    let myFormFields: any = myForm.getElementsByTagName( "input" )
    let status: boolean = true
    for ( let i = 0; i < myFormFields.length; i++ ) {
        if ( !validateInput(myFormFields[i]) ) {
          console.log('Неверное поле', myFormFields[i])
          status = false
        }
    }
    console.log('Все поля верны!')
    return status
}
export default validateForm