import UnauthWorkspace from '../../components/UnauthWorkspace.js';
import { formCTX } from './contexts.js';
import Block from '../../utils/Block.js';
import Form from '../../components/form/Form.js';
import { tpl } from './template.js';
class SignUp extends Block {
    constructor() {
        super("div", {
            workspace: new UnauthWorkspace({
                child: new Form(formCTX)
            })
        });
    }
    render() {
        return this.compile(tpl, {
            content: this.props.workspace.render()
        });
    }
}
export default SignUp;
//# sourceMappingURL=SignUp.js.map