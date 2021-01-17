import AuthWorkspace from '../../components/authWorkSpace/AuthWorkspace';
import {errorCTX} from './contexts';
import Block from '../../utils/Block';
import Error from '../../components/error/Error';
import {tpl} from './template';
import {ErrorProps} from './types';
import {render} from '../../utils/render';

class Error500 extends Block<ErrorProps> {
	constructor() {
		super('div', {
			content: new AuthWorkspace({
				content: [
					new Error(errorCTX)
				]
			})
		});
	}

	show() {
		render('.app', this);
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.render()
		});
	}
}
export default Error500;
