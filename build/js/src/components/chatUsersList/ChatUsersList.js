import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class ChatUsersList extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            users: this.props.users,
            usersToAdd: this.props.usersToAdd,
            addUserButton: this.props.addUserButton.render(),
        });
    }
}
export default ChatUsersList;
//# sourceMappingURL=ChatUsersList.js.map