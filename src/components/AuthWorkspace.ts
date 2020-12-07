import Block  from '../utils/Block.js'

const tpl = `<main>
              <div class="workspace__wrapper">
                  <div class="workspace__container">
                    {{{content}}}
                  </div>
              </div>
            </main>`
class AuthWorkspace extends Block {
    constructor(props: object) {
      super( "main", props);
    }    
  
    render() {
      return this.compile(tpl, {
        content: this.props.child.render()
      })
    }
  }
export default AuthWorkspace