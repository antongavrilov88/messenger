declare global {
    interface Window {
      openModal: (id: string) => void,
      closeModal: (id: string) => void
    }
  }

export function openModal( modalID: string ): void {
    let modal = document.getElementById( modalID )
    if (modal) {
        const modalContent = modal.querySelector('.dialog-modal__content')
        const modalBackground = modal.querySelector('.dialog-modal__background')
        modalBackground?.classList.add('open')
        modal.classList.add('open')
        modalContent?.classList.add('open')
    }
    return
}

export function closeModal( modalID: string ): void {
    let modal = document.getElementById( modalID )
    if ( modal ) {
        const modalContent = modal.querySelector('.dialog-modal__content')
        const modalBackground = modal.querySelector('.dialog-modal__background')
        modalBackground?.classList.remove('open')
        modal.classList.remove('open')
        modalContent?.classList.remove('open')
    }
    return
}
window.openModal = openModal
window.closeModal = closeModal