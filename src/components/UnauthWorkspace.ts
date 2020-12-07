import Block from '../utils/Block.js'

const tpl = `<div class="form-wrapper">
<div class="container">
{{ content }}
</div>
</div>`

class UnauthWorkSpace extends Block {
    constructor(props, children) {
        super("div", props, children)
    }

    render() {
        return this.compile(tpl, this.props)
    }
}
export default UnauthWorkSpace