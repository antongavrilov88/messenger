function openModal( modalID: string ): void {
    let modal = document.getElementById( modalID )
    if (modal) {
        modal.hidden = false
    }
    return
}

function closeModal( modalID: string ): void {
    let modal = document.getElementById( modalID )
    if ( modal ) {
        modal.hidden = true
    }
    return
}
window.openModal = openModal
window.closeModal = closeModal