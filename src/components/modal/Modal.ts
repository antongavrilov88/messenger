import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class Modal extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            modalHandler: this.props ? this.props.modalHandler : null
        })
    }
}
export default Modal