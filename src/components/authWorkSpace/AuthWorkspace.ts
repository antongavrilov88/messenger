import Block from '../../utils/Block';
import {tpl} from './template';
import {AuthWorkspaceProps} from './types';
class AuthWorkspace extends Block<AuthWorkspaceProps> {
	constructor(props: AuthWorkspaceProps) {
		super('main', props);
	}

	render() {
		return this.compile(tpl, {
			// eslint-disable-next-line max-len
			content: this.props.content.map((child: { render: () => any; }) => child.render()).join('')
		});
	}
}
export default AuthWorkspace;
