function openModal( modalID ) {
    let modal = document.getElementById( modalID )
    if (modal) {
        modal.hidden = false
    }
    return false
}

function closeModal( modalID ) {
    let modal = document.getElementById( modalID )
    if ( modal ) {
        modal.hidden = true
    }
    return false
}