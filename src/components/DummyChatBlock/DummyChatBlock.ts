import Block from '../../utils/Block';
import {tpl} from './template';
import {DummyChatBlockProps} from './types';

class DummyChatBlock extends Block<DummyChatBlockProps> {
	constructor(props: DummyChatBlockProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			text: this.props.text
		});
	}
}
export default DummyChatBlock;
