import validateForm from './validateForm.js';
function formHandler(formID) {
    let myForm = document.getElementById(formID);
    validateForm(formID);
    myForm.onsubmit = function (e) {
        e.preventDefault();
        let myFormFields = myForm.getElementsByTagName("input");
        let requestObject = {};
        for (let i = 0; i < myFormFields.length; i++) {
            requestObject[`${myFormFields[i].name}`] = myFormFields[i].value;
        }
        console.log(requestObject);
    };
}
window.formHandler = formHandler;
export default formHandler;
//# sourceMappingURL=manageForm.js.map