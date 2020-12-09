import { modalCTX } from "../pages/profile/contexts"

declare global {
    interface Window {
      openModal: (id: string) => void,
      closeModal: (id: string) => void
    }
  }

export function openModal( modalID: string ): void {
    console.log(2)
    let modal = document.getElementById( modalID )
    console.log( modal, modalID )
    if (modal) {
        modal.hidden = false
    }
    return
}

export function closeModal( modalID: string ): void {
    console.log(1)
    let modal = document.getElementById( modalID )
    if ( modal ) {
        modal.hidden = true
    }
    return
}
window.openModal = openModal
window.closeModal = closeModal