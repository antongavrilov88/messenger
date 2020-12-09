import Block from '../../utils/Block.js';
import ChangePassword from '../../components/changePassword/ChangePassword.js';
import { tpl } from './template.js';
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js';
import ReturnBlock from '../../components/returnBlock/ReturnBlock.js';
import { returnBlockCTX } from './contexts.js';
class ChangePasswordPage extends Block {
    constructor() {
        super("div", {
            workspace: new AuthWorkSpace({
                child: [
                    new ReturnBlock(returnBlockCTX),
                    new ChangePassword({})
                ]
            })
        });
    }
    render() {
        return this.compile(tpl, {
            content: this.props.workspace.render()
        });
    }
}
export default ChangePasswordPage;
//# sourceMappingURL=ChangePasswordPage.js.map