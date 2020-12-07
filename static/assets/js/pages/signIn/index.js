import { render } from '../../utils/render.js';
import UnauthWorkspace from '../../components/UnauthWorkspace.js';
import { formCTX } from './contexts.js';
import Block from '../../utils/Block.js';
import Form from '../../components/Form.js';
const tpl = `<div>{{{content}}}</div>`;
export default class SignIn extends Block {
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
const signIn = new SignIn();
render(".app", signIn);
//# sourceMappingURL=index.js.map