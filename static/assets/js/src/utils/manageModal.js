export function openModal(modalID) {
    let modal = document.getElementById(modalID);
    if (modal) {
        const modalContent = modal.querySelector('.dialog-modal__content');
        const modalBackground = modal.querySelector('.dialog-modal__background');
        modalBackground === null || modalBackground === void 0 ? void 0 : modalBackground.classList.add('open');
        modal.classList.add('open');
        modalContent === null || modalContent === void 0 ? void 0 : modalContent.classList.add('open');
    }
    return;
}
export function closeModal(modalID) {
    let modal = document.getElementById(modalID);
    if (modal) {
        const modalContent = modal.querySelector('.dialog-modal__content');
        const modalBackground = modal.querySelector('.dialog-modal__background');
        modalBackground === null || modalBackground === void 0 ? void 0 : modalBackground.classList.remove('open');
        modal.classList.remove('open');
        modalContent === null || modalContent === void 0 ? void 0 : modalContent.classList.remove('open');
    }
    return;
}
window.openModal = openModal;
window.closeModal = closeModal;
//# sourceMappingURL=manageModal.js.map