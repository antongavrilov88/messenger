import Block from '../../utils/Block';
import {tpl} from './template';
import {ChangePasswordProps} from './types';

class ChangePassword extends Block<ChangePasswordProps> {
	constructor(props: ChangePasswordProps) {
		super('div', props);
	}

	render() {
		return this.compile(tpl, {
			id: this.props.id,
			formHandler: this.props.formHandler,
			inputHandler: this.props.inputHandler,
			submitButton: this.props.submitButton.render()
		});
	}
}
export default ChangePassword;
