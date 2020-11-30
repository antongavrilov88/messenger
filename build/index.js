function formHandler(formID) {
    let myForm = document.getElementById(formID);
    myForm.onsubmit = function (e) {
        e.preventDefault();
        let myFormFields = myForm.getElementsByTagName("input");
        let requestObject = {};
        console.log(requestObject);
    };
}
function openModal(modalID) {
    let modal = document.getElementById(modalID);
    if (modal) {
        modal.hidden = false;
    }
    return;
}
function closeModal(modalID) {
    let modal = document.getElementById(modalID);
    if (modal) {
        modal.hidden = true;
    }
    return;
}
