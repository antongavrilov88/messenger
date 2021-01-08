import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class ReturnBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            linkUrl: this.props.urlLink
        });
    }
}
export default ReturnBlock;
//# sourceMappingURL=ReturnBlock.js.map