import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class Error extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            errorCode: this.props.errorCode,
            errorMessage: this.props.errorMessage
        })
    }
}
export default Error