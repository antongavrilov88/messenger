import Block  from '../../utils/Block.js'
import { tpl } from './template.js'
import { AuthWorkspaceProps } from './types.js'
class AuthWorkspace extends Block {
    constructor(props: AuthWorkspaceProps) {
      super( "main", props);
    }    
  
    render() {
      return this.compile(tpl, {
        content:  this.props ? this.props.child.map((child: { render: () => any; }) => child.render()).join('') : null
      })
    }
  }
export default AuthWorkspace