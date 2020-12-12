import validateForm from './validateForm.js'

function formHandler( form: HTMLFormElement ): void {
    let myForm = form
    myForm.onsubmit = function( e ): void {
        e.preventDefault()
        let myFormFields = myForm.getElementsByTagName( "input" )
        let requestObject: {[formFieldName: string]: string} = {}
        for ( let i = 0; i < myFormFields.length; i++ ) {
            requestObject[`${myFormFields[i].name}`] = myFormFields[i].value
        }
        validateForm(form) ? console.log( requestObject ) : console.log( 'Invalid values' )
    }
}
export default formHandler