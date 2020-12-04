import Block from '../../utils/Block.js';
class TestComponent extends Block {
    constructor(props) {
        super("button", props);
    }
    render() {
        return `<button>{{ text }}</button>`;
    }
}
export default TestComponent;
//# sourceMappingURL=TestComponent.js.map