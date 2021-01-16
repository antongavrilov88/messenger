/* eslint-disable max-len */
import Block from '../../utils/Block';
import {tpl} from './template';
import {UnauthWorkSpaceProps} from './types';

class UnauthWorkSpace extends Block<UnauthWorkSpaceProps> {
	constructor(props: UnauthWorkSpaceProps) {
		super('main', props);
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.map((child: { render: () => any; }) => child.render()).join('')
		});
	}
}
export default UnauthWorkSpace;
