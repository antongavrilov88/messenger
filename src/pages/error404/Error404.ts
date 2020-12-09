import AuthWorkspace from '../../components/AuthWorkSpace/AuthWorkspace.js'
import { errorCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Error from '../../components/error/Error.js'
import { tpl } from './template.js'

class Error404 extends Block {
    constructor() {
        super("div", {
            workspace: new AuthWorkspace({
                child: [new Error(errorCTX)]
            })
        })
    }

    render() {
        return this.compile(tpl, {
            content: this.props.workspace.render()
        })
    }
}
export default Error404