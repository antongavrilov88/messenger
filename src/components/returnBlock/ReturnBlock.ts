import Block from '../../utils/Block';
import {tpl} from './template';
import {ReturnBlockProps} from './types';

class ReturnBlock extends Block<ReturnBlockProps> {
	constructor(props: ReturnBlockProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			linkUrl: this.props.urlLink
		});
	}
}
export default ReturnBlock;
