interface formField extends HTMLElement {
    name: string,
    value: number | string
}

function formHandler( formID: string ): void {
    let myForm = document.getElementById( formID )
    myForm.onsubmit = function( e ): void {
        e.preventDefault()
        let myFormFields: HTMLCollectionOf<formField> = myForm.getElementsByTagName( "input" )
        let requestObject = {}
        for ( let i = 0; i < myFormFields.length; i++ ) {
            requestObject[`${myFormFields[i].name}`] = myFormFields[i].value
        }
        console.log( requestObject )
    }
}
window.formHandler = formHandler
export default formHandler