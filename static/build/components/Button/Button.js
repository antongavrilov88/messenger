import Block from '../../Block';
export class Button extends Block {
    constructor(props) {
        super("button", props);
    }
    render() {
        return `<div>${this.props.text}</div>`;
    }
}
export default Button;
//# sourceMappingURL=Button.js.map