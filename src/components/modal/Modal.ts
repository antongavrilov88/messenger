import Block from '../../utils/Block'
import { tpl } from './template'
import { ModalProps } from './types'

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