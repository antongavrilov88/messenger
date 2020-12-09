import Block from '../../utils/Block.js';
import { tpl } from './template.js';
class ReturnBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            urlLink: this.props ? this.props.urlLink : null
        });
    }
}
export default ReturnBlock;
//# sourceMappingURL=ReturnBlock.js.map