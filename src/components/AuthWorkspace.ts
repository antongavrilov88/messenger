import Block  from '../utils/Block.js'

class AuthWorkspace extends Block {
    constructor(props: object) {
      super( "main", props);
    }    
  
    render() {
      return (
      `<main>
          <div class="workspace__wrapper">
              <div class="workspace__container">

              </div>
          </div>
      </main>`
      )
    }
  }
export default AuthWorkspace