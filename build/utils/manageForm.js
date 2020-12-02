function formHandler(formID) {
    let myForm = document.getElementById(formID);
    myForm.onsubmit = function (e) {
        e.preventDefault();
        let myFormFields = myForm.getElementsByTagName("input");
        let requestObject = {};
        for (let myFormField of myFormFields) {
            requestObject[`${myFormField.name}`] = myFormField.value;
        }
        console.log(requestObject);
    };
}
