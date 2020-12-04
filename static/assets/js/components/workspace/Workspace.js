import Block from '../../utils/Block.js';
import Form from '../form/Form.js';
const form = new Form({
    buttonText: 'Click me CHILD',
});
class Workspace extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return (`<main>
          <div class="workspace__wrapper">
              <div class="workspace__container">
                      {{ content }}
                      ${form.render()}
              </div>
          </div>
      </main>`);
    }
}
export default Workspace;
//# sourceMappingURL=Workspace.js.map