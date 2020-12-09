import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ChangePassword extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {})
    }
}
export default ChangePassword