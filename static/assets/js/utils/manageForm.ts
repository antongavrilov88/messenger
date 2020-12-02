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
        for ( let myFormField of myFormFields) {
            requestObject[`${myFormField.name}`] = myFormField.value
        }
        console.log( requestObject )
    }
}