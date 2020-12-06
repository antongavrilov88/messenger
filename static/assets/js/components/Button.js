import Block from '../utils/Block.js';
class Button extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return (`<button  class='{{ className }}'>
            {{ text }}
            </button>`);
    }
}
export default Button;
//# sourceMappingURL=Button.js.map