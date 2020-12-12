import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { UnauthWorkSpaceProps } from './types.js'

class UnauthWorkSpace extends Block {
    constructor(props: UnauthWorkSpaceProps) {
        super("main", props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.child.render() : null
        })
    }
}
export default UnauthWorkSpace