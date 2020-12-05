import Block  from '../utils/Block.js'
import Form from './Form.js'

const form = new Form({
    buttonText: 'Click me CHILD',
})

class Workspace extends Block {
    constructor(props: object) {
      super( "div", props);
    }    
  
    render() {
      return (
      `<main>
          <div class="workspace__wrapper">
              <div class="workspace__container">
                      {{ content }}
                      ${form.render()}
              </div>
          </div>
      </main>`
      )
    }
  }
export default Workspace