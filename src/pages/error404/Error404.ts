import AuthWorkspace from '../../components/AuthWorkSpace/AuthWorkspace.js'
import { errorCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Error from '../../components/error/Error.js'
import { tpl } from './template.js'
import { ErrorProps } from './types.js'
import { render } from '../../utils/render.js'

class Error404 extends Block<ErrorProps> {
    constructor() {
        super("div", {
            content: new AuthWorkspace({
                content: [
                    new Error(errorCTX)
                ]
            })
        })
    }

    show() {
        render( '.app', this )
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default Error404