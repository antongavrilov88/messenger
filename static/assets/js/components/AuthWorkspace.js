import Block from '../utils/Block.js';
import Form from './Form.js';
const form = new Form({
    buttonText: 'Click me CHILD',
});
class AuthWorkspace extends Block {
    constructor(props, children) {
        super("div", props, children);
    }
    render() {
        return (`<main>
          <div class="workspace__wrapper">
              <div class="workspace__container">

              </div>
          </div>
      </main>`);
    }
}
export default AuthWorkspace;
//# sourceMappingURL=AuthWorkspace.js.map