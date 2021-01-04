import Block from '../../utils/Block'
import { tpl } from './template'
import { ErrorProps } from './types'

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