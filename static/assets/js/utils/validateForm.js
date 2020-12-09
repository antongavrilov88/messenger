import validateInput from './validateInput.js';
export function validateForm(form) {
    let myForm = form;
    let myFormFields = myForm.getElementsByTagName("input");
    let status = true;
    for (let i = 0; i < myFormFields.length; i++) {
        validateInput(myFormFields[i]) ? null : status = false;
    }
    return status;
}
window.validateForm = validateForm;
//# sourceMappingURL=validateForm.js.map