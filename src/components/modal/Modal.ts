import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class Modal extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            modalHandler: this.props.modalHandler
        })
    }
}
export default Modal