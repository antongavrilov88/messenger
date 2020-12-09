export function openModal(modalID) {
    let modal = document.getElementById(modalID);
    if (modal) {
        modal.hidden = false;
    }
    return;
}
export function closeModal(modalID) {
    let modal = document.getElementById(modalID);
    if (modal) {
        modal.hidden = true;
    }
    return;
}
window.openModal = openModal;
window.closeModal = closeModal;
//# sourceMappingURL=manageModal.js.map