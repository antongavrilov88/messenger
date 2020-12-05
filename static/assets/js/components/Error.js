import Block from '../utils/Block.js';
class Error extends Block {
    constructor(props) {
        super("fragment", props);
    }
    render() {
        return (`<div class="error-container">
                <h1>{{ errorCode }}</h1>
                <p>{{ errorMessage }}</p>
            </div>`);
    }
}
export default Error;
//# sourceMappingURL=Error.js.map