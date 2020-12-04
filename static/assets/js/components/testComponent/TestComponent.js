import Block from '../../utils/Block.js';
class TestComponent extends Block {
    constructor(props) {
        super("fragment", props);
    }
    render() {
        return `<button class={{ className }}>{{ buttonText }}</button>`;
    }
}
export default TestComponent;
//# sourceMappingURL=TestComponent.js.map