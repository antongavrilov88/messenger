import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class ChatListHeaderLink extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            logoutText: this.props.logoutText,
            linkUrl: this.props.linkUrl,
            linkText: this.props.linkText
        });
    }
}
export default ChatListHeaderLink;
//# sourceMappingURL=ChatListHeaderLink.js.map