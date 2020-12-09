import { validateForm } from './validateForm.js'

interface formField extends HTMLElement {
    name: string,
    value: number | string
}
declare global {
    interface Window {
      formHandler: (form: HTMLFormElement) => void
    }
  }

function formHandler( form: HTMLFormElement ): void {
    let myForm = form
    console.log( form )
    myForm.onsubmit = function( e ): void {
        e.preventDefault()
        let myFormFields: HTMLCollectionOf<formField> = myForm.getElementsByTagName( "input" )
        let requestObject = {}
        for ( let i = 0; i < myFormFields.length; i++ ) {
            requestObject[`${myFormFields[i].name}`] = myFormFields[i].value
        }
        validateForm(form) ? console.log( requestObject ) : console.log( 'Invalid values' )
    }
}
window.formHandler = formHandler
export default formHandler