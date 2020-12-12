import AuthWorkspace from '../../components/AuthWorkSpace/AuthWorkspace.js';
import { errorCTX } from './contexts.js';
import Block from '../../utils/Block.js';
import Error from '../../components/error/Error.js';
import { tpl } from './template.js';
class Error500 extends Block {
    constructor() {
        super("div", {
            content: new AuthWorkspace({
                content: [
                    new Error(errorCTX)
                ]
            })
        });
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        });
    }
}
export default Error500;
//# sourceMappingURL=Error500.js.map