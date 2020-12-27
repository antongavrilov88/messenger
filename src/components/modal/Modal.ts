import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ModalProps } from './types.js'

class Modal extends Block<ModalProps> {
    constructor(props: ModalProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            id: this.props.id,
            form: this.props.form.render()
        })
    }
}
export default Modal