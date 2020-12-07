interface formField extends HTMLElement {
    name: string,
    value: number | string
}


function validateForm( formID ) {
    let myForm = document.getElementById( formID )
    let myFormFields: HTMLCollectionOf<formField> = myForm.getElementsByTagName( "input" )
    let requestObject = {}
    for ( let i = 0; i < myFormFields.length; i++ ) {
        myFormFields[i].addEventListener( 'blur', function validateInput(e) {
            let input = e.target
            let value = input
        })
    }
    console.log( requestObject )
}