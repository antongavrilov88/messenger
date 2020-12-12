import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { UnauthWorkspaceProps } from './types.js'

class UnauthWorkspace extends Block {
    constructor(props: UnauthWorkspaceProps) {
        super("main", props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.content.render() : null
        })
    }
}
export default UnauthWorkspace