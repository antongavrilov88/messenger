import Block from '../utils/Block.js'

class Modal extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return(
        `<div id="change-avatar-modal" hidden=true>
            <div class="modal-dialog__background">
            </div>
            <div class="avatar__dialog-modal">
                <h1>Загрузите файл</h1>
                <div class="modal-dialog__body">
                    <a href="#">Выберите файл на своем компьютере</a>
                </div>
                <button class="modal-dialog__submit-button"
                    onclick="window.closeModal('change-avatar-modal')">Изменить</button>
            </div>
        </div>`
        )
    }
}
export default Modal