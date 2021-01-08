import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class App extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            initMessage: this.props.initMessage
        });
    }
}
export default App;
//# sourceMappingURL=App.js.map