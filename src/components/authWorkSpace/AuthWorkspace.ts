import Block  from '../../utils/Block.js'
import { tpl } from './template.js'
import { AuthWorkspaceProps } from './types.js'
class AuthWorkspace extends Block<AuthWorkspaceProps> {
    constructor(props: AuthWorkspaceProps) {
      super( "main", props);
    }    
  
    render() {
      return this.compile(tpl, {
        content:  this.props.content.map((child: { render: () => any; }) => child.render()).join('')
      })
    }
  }
export default AuthWorkspace