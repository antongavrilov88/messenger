import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class UnauthWorkSpace extends Block {
    constructor(props) {
        super("main", props);
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        });
    }
}
export default UnauthWorkSpace;
//# sourceMappingURL=UnauthWorkspace.js.map