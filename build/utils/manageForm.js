"use strict";
function formHandler(formID) {
    let myForm = document.getElementById(formID);
    myForm.onsubmit = function (e) {
        e.preventDefault();
        let myFormFields = myForm.getElementsByTagName("input");
        let requestObject = {};
        console.log(requestObject, myFormFields);
    };
}
//# sourceMappingURL=manageForm.js.map