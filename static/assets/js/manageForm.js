function formHandler( formID ) {
    let myForm = document.getElementById( formID )
    myForm.onsubmit = function( e ) {
        e.preventDefault()
        myFormFields = myForm.getElementsByTagName( "input" )
        requestObject = {}
        for ( let myFormField of myFormFields) {
            requestObject[`${myFormField.name}`] = myFormField.value
        }
        console.log( requestObject )
    }
}