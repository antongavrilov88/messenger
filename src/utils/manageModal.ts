declare global {
    interface Window {
      openModal: (id: string) => void,
      closeModal: (id: string) => void
    }
  }

export function openModal(modalID: string): void {
	const modal = document.getElementById(modalID);
	if (modal) {
		const modalContent = modal.querySelector('.dialog-modal__content');
		const modalBackground = modal.querySelector('.dialog-modal__background');
		modalBackground?.classList.add('open');
		modal.classList.add('open');
		modalContent?.classList.add('open');
	}
}

export function closeModal(modalID: string): void {
	const modal = document.getElementById(modalID);
	if (modal) {
		const modalContent = modal.querySelector('.dialog-modal__content');
		const modalBackground = modal.querySelector('.dialog-modal__background');
		modalBackground?.classList.remove('open');
		modal.classList.remove('open');
		modalContent?.classList.remove('open');
	}
}

window.openModal = openModal;
window.closeModal = closeModal;
