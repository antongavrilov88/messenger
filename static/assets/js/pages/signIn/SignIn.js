import Block from '../../utils/Block.js';
class SignIn extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
        console.log('монтаж закончен', this.getContent());
        console.log(this._element.querySelector('.container'), this._element);
        let parentNode = this._element.querySelector('.container');
        parentNode.appendChild(this.props.child);
    }
    render() {
        return (`<div class="form-wrapper">
                <div class="container">
                </div>
            </div>`);
    }
}
export default SignIn;
//# sourceMappingURL=SignIn.js.map