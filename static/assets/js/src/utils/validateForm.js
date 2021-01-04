import validateInput from "./validateInput.js";
function validateForm(form) {
    let myForm = form;
    let myFormFields = myForm.getElementsByTagName("input");
    let status = true;
    for (let i = 0; i < myFormFields.length; i++) {
        if (!validateInput(myFormFields[i])) {
            console.log('Неверное поле', myFormFields[i]);
            status = false;
        }
    }
    console.log('Все поля верны!');
    return status;
}
export default validateForm;
//# sourceMappingURL=validateForm.js.map