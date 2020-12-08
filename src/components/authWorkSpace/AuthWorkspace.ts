import Block  from '../../utils/Block.js'
import { tpl } from './template.js'
class AuthWorkspace extends Block {
    constructor(props: object) {
      super( "main", props);
    }    
  
    render() {
      return this.compile(tpl, {
        content: this.props.child[0].render(),
        content2: this.props.child[1] ? this.props.child[1].render() : null
      })
    }
  }
export default AuthWorkspace