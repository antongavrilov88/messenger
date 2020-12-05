import Block from '../../utils/Block.js';
class SignIn extends Block {
    constructor(props, children) {
        super("div", props, children);
    }
    render() {
        return (`<div class="form-wrapper">
                <div class="container">
                ${this.props.id ? this.props.id : null}
                </div>
            </div>`);
    }
}
export default SignIn;
//# sourceMappingURL=SignIn.js.map