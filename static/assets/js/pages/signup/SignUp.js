import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js';
import { formCTX } from './contexts.js';
import Block from '../../utils/Block.js';
import Form from '../../components/form/Form.js';
import { tpl } from './template.js';
class SignUp extends Block {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            })
        });
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        });
    }
}
export default SignUp;
//# sourceMappingURL=SignUp.js.map