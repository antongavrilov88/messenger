import validateForm from './validateForm.js';
function formHandler(form) {
    let myForm = form;
    myForm.onsubmit = function (e) {
        e.preventDefault();
        let myFormFields = myForm.getElementsByTagName("input");
        let requestObject = {};
        for (let i = 0; i < myFormFields.length; i++) {
            requestObject[`${myFormFields[i].name}`] = myFormFields[i].value;
        }
        validateForm(form) ? console.log(requestObject) : console.log('Invalid values');
    };
}
export default formHandler;
//# sourceMappingURL=manageForm.js.map