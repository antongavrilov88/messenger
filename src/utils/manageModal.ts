declare global {
    interface Window {
      openModal: (id: string) => void,
      closeModal: (id: string) => void
    }
  }

export function openModal( modalID: string ): void {
    let modal = document.getElementById( modalID )
    if (modal) {
        modal.hidden = false
    }
    return
}

export function closeModal( modalID: string ): void {
    let modal = document.getElementById( modalID )
    if ( modal ) {
        modal.hidden = true
    }
    return
}
// window.openModal = openModal
// window.closeModal = closeModal