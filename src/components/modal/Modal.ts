import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ModalProps } from './types.js'

class Modal extends Block {
    constructor(props: ModalProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            modalHandler: this.props ? this.props.modalHandler : null
        })
    }
}
export default Modal