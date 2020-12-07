"use strict";
function validateForm(formID) {
    let myForm = document.getElementById(formID);
    let myFormFields = myForm.getElementsByTagName("input");
    let requestObject = {};
    for (let i = 0; i < myFormFields.length; i++) {
        myFormFields[i].addEventListener('blur', function validateInput(e) {
            let input = e.target;
            let value = input;
        });
    }
    console.log(requestObject);
}
//# sourceMappingURL=validateForm.js.map