function formHandler( formID: string ): void {
    let myForm = document.getElementById( formID )
    myForm.onsubmit = function( e ): void {
        e.preventDefault()
        let myFormFields: HTMLCollectionOf<HTMLElement> = myForm.getElementsByTagName( "input" )
        let requestObject = {}
        // for ( let myFormField of myFormFields) {
        //     requestObject[`${myFormField.name}`] = myFormField.value
        // }
        console.log( requestObject )
    }
}