function formHandler() {
    let myForm = document.forms[0]
    myForm.onsubmit = function( e ) {
        e.preventDefault()
        myFormFields = myForm.getElementsByTagName( "input" )
        for ( let myFormField of myFormFields) {
            console.log( `${myFormField.name}: "${myFormField.value}"` )
        }
    }
}