import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ErrorProps } from './types.js'

class Error extends Block<ErrorProps> {
    constructor(props: ErrorProps) {
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