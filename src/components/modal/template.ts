export const tpl = `<div id="changeAvatarModal" hidden=true>
                        <div class="modal-dialog__background">
                        </div>
                        <div class="avatar__dialog-modal">
                            <h1>Загрузите файл</h1>
                            <div class="modal-dialog__body">
                                <a href="#">Выберите файл на своем компьютере</a>
                            </div>
                            <button class="modal-dialog__submit-button"
                                onclick="{{modalHandler}}">Изменить</button>
                        </div>
                    </div>`