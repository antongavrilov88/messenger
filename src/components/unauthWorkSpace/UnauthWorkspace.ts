import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class UnauthWorkSpace extends Block {
    constructor(props: object | undefined) {
        super("main", props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.child.render() : null
        })
    }
}
export default UnauthWorkSpace