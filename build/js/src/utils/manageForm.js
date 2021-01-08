import validateForm from "./validateForm.js";
function formHandler(formID) {
    let form = document.getElementById(formID);
    let myFormFields = form.getElementsByTagName("input");
    let requestObject = {};
    for (let i = 0; i < myFormFields.length; i++) {
        requestObject[`${myFormFields[i].name}`] = myFormFields[i].value;
    }
    if (validateForm(form)) {
        const obj = {
            data: JSON.stringify(requestObject)
        };
        return obj;
    }
}
export default formHandler;
//# sourceMappingURL=manageForm.js.map