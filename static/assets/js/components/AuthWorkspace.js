import Block from '../utils/Block.js';
import Form from './Form.js';
const form = new Form({
    buttonText: 'Click me CHILD',
});
class AuthWorkspace extends Block {
    constructor(props, children) {
        super("fragment", props, children);
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