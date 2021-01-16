import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace';
import {formCTX} from './contexts';
import Block from '../../utils/Block';
import Form from '../../components/form/Form';
import {tpl} from './template';
import {SignUpProps} from './types';
import Store from '../../utils/Store';
import AuthAPI from '../../API/AuthAPI';
import {ON_SIGNUP, ON_LOAD} from '../../actions';
import {stateUpdater} from '../../stateUpdater/stateUpdater';
import formHandler from '../../utils/manageForm';
import {render} from '../../utils/render';
import Button from '../../components/button/Button';
import {router} from '../../index';
import {switchFormButtonCTX} from '../signup/contexts';

let store = Store.getInstance();

let authAPI = new AuthAPI();

const updateState = {
	onSignUp: (payload: any) => {
		stateUpdater({type: ON_SIGNUP, payload: payload});
	},
	onLoad: (payload: any) => {
		stateUpdater({type: ON_LOAD, payload: payload});
	}
};

class SignUp extends Block<SignUpProps> {
	constructor() {
		super('div', {
			content: new UnauthWorkspace({
				content: [
					new Form(formCTX),
					new Button(switchFormButtonCTX)
				]
			})
		});
		this.stateToProps = this.stateToProps.bind(this);
		store.subscribe(this.stateToProps);
	}

	stateToProps() {
		this.setProps({
			content: new UnauthWorkspace({
				content: [
					new Form(formCTX),
					new Button(switchFormButtonCTX)
				]
			})
		});
	}

	addListeners() {
		let formH: EventListener = this.formHandler;
		let form: Node | null = document.getElementById('signUpForm');
		if (form) {
			form.addEventListener('submit', formH);
		}

		const switchFormButton = document.getElementById('switchToSignInButton');
		switchFormButton?.addEventListener('click', function () {
			router.go('/signin');
		});
	}

	formHandler = (ev: Event) => {
		ev.preventDefault();
		let res = formHandler(formCTX.id);
		if (res) {
			updateState.onSignUp(authAPI.signUp(res));
		}
	}

	show() {
		render('.app', this);

		let formH: EventListener = this.formHandler;
		let form: Node = document.getElementById('signUpForm')!;
		form.addEventListener('submit', formH);
	}

	hide() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
	}

	componentDidMount() {
		updateState.onLoad(authAPI.getUser());
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.render()
		});
	}
}
export default SignUp;
