export function openModal(modalID) {
    console.log(2);
    let modal = document.getElementById(modalID);
    console.log(modal, modalID);
    if (modal) {
        modal.hidden = false;
    }
    return;
}
export function closeModal(modalID) {
    console.log(1);
    let modal = document.getElementById(modalID);
    if (modal) {
        modal.hidden = true;
    }
    return;
}
window.openModal = openModal;
window.closeModal = closeModal;
//# sourceMappingURL=manageModal.js.map