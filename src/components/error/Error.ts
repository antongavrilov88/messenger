import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ErrorProps } from './types.js'

class Error extends Block {
    constructor(props: ErrorProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            errorCode: this.props ? this.props.errorCode : null,
            errorMessage: this.props ? this.props.errorMessage : null
        })
    }
}
export default Error