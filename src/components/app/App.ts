import Block from '../../utils/Block';
import {tpl} from './template';
import {AppProps} from './types';

class App extends Block<AppProps> {
	constructor(props: AppProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			initMessage: this.props.initMessage
		});
	}
}
export default App;
