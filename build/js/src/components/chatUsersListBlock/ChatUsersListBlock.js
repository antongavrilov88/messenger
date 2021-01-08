import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class ChatUsersListBlock extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.map((child) => child.render()).join('')
        });
    }
}
export default ChatUsersListBlock;
//# sourceMappingURL=ChatUsersListBlock.js.map