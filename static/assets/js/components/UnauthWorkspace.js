import Block from '../utils/Block.js';
const tpl = `<div class="form-wrapper">
<div class="container">
{{{content}}}
</div>
</div>`;
class UnauthWorkSpace extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            content: this.props.child.render()
        });
    }
}
export default UnauthWorkSpace;
//# sourceMappingURL=UnauthWorkspace.js.map