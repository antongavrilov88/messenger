function formHandler( formID ) {
    let myForm = document.getElementById( formID )
    myForm.onsubmit = function( e ) {
        e.preventDefault()
        myFormFields = myForm.getElementsByTagName( "input" )
        for ( let myFormField of myFormFields) {
            console.log( `${myFormField.name}: "${myFormField.value}"` )
        }
    }
}