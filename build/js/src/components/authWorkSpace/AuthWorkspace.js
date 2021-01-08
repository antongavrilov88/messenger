import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class AuthWorkspace extends Block {
    constructor(props) {
        super("main", props);
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.map((child) => child.render()).join('')
        });
    }
}
export default AuthWorkspace;
//# sourceMappingURL=AuthWorkspace.js.map