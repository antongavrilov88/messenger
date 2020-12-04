"use strict";
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
//# sourceMappingURL=manageModal.js.map