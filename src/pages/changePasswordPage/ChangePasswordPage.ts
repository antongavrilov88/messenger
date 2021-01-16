import Block from '../../utils/Block';
import ChangePassword from '../../components/changePassword/ChangePassword';
import {tpl} from './template';
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace';
import ReturnBlock from '../../components/returnBlock/ReturnBlock';
import {returnBlockCTX, changePasswordFormCTX} from './contexts';
import {ChangePasswordPageProps} from './types';
import Store from '../../utils/Store';
import {stateUpdater} from '../../stateUpdater/stateUpdater';
import {ON_CHANGE_PASSWORD, ON_LOAD} from '../../actions';
import formHandler from '../../utils/manageForm';
import {render} from '../../utils/render';
import {router} from '../../index';
import {API} from '../../API/mainApi';

let store = Store.getInstance();

const updateState = {
	onChangePassword: (payload: any) => {
		stateUpdater({type: ON_CHANGE_PASSWORD, payload: payload});
	},
	onLoad: (payload: any) => {
		stateUpdater({type: ON_LOAD, payload: payload});
	}
};

class ChangePasswordPage extends Block<ChangePasswordPageProps> {
	constructor() {
		super('div', {
			content: new AuthWorkSpace({
				content: [
					new ReturnBlock(returnBlockCTX),
					new ChangePassword(changePasswordFormCTX)
				]
			})
		});
		this.stateToProps = this.stateToProps.bind(this);
		store.subscribe(this.stateToProps);
	}

	stateToProps() {
		this.setProps({
			content: new AuthWorkSpace({
				content: [
					new ReturnBlock(returnBlockCTX),
					new ChangePassword(changePasswordFormCTX)
				]
			}),
			auth: store.state.auth
		});
	}

	formHandler = (ev: Event) => {
		ev.preventDefault();
		let res = formHandler(changePasswordFormCTX.id);
		if (res) {
			updateState.onChangePassword(API.user.updatePassword(res));
		}
	};

	show() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
		render('.app', this);

		let formH: EventListener = this.formHandler;
		let form: Node = document.getElementById('changePasswordForm')!;
		form.addEventListener('submit', formH);
	}

	hide() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
	}

	addListeners() {
		let formH: EventListener = this.formHandler;
		let form: Node = document.getElementById('changePasswordForm')!;
		form.addEventListener('submit', formH);
	}

	componentDidMount() {
		updateState.onLoad(API.auth.getUser());
	}

	componentDidUpdate() {
		if (this.props.auth && this.props.auth.status === false) {
			router.go('/');
		}

		return true;
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.render()
		});
	}
}
export default ChangePasswordPage;
