import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class DummyChatBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            text: this.props ? this.props.text : null
        });
    }
}
export default DummyChatBlock;
//# sourceMappingURL=DummyChatBlock.js.map