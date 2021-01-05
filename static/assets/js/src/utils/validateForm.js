import validateInput from "./validateInput.js";
function validateForm(form) {
    let myForm = form;
    let myFormFields = myForm.getElementsByTagName("input");
    let status = true;
    for (let i = 0; i < myFormFields.length; i++) {
        if (!validateInput(myFormFields[i])) {
            status = false;
        }
    }
    return status;
}
export default validateForm;
//# sourceMappingURL=validateForm.js.map