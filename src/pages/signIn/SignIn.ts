/* eslint-disable no-undef */
import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace';
import {formCTX, switchFormButtonCTX} from './contexts';
import Block from '../../utils/Block';
import Form from '../../components/form/Form';
import {tpl} from './template';
import {SignInProps} from './types';
import Store from '../../utils/Store';
import {stateUpdater} from '../../stateUpdater/stateUpdater';
import {ON_LOGIN, ON_LOAD} from '../../actions';
import formHandler from '../../utils/manageForm';
import {render} from '../../utils/render';
import {router} from '../../index';
import {API} from '../../API/mainAPI';
import Button from '../../components/button/Button';

let store = Store.getInstance();

const updateState = {
	onLogin: (payload: any) => {
		stateUpdater({type: ON_LOGIN, payload: payload});
	},
	onLoad: (payload: any) => {
		stateUpdater({type: ON_LOAD, payload: payload});
	}
};

class SignIn extends Block<SignInProps> {
	constructor() {
		super('div', {
			content:
				new UnauthWorkspace({
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
			content:
				new UnauthWorkspace({
					content: [
						new Form(formCTX),
						new Button(switchFormButtonCTX)
					]
				}),
			auth: store.state.auth
		});
	}

	formHandler = (ev: Event) => {
		ev.preventDefault();
		let res = formHandler(formCTX.id);
		if (res) {
			updateState.onLogin(API.auth.signIn(res));
		}
	}

	show() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
		render('.app', this);
		let formH: EventListener = this.formHandler;
		let form: Node = document.getElementById('loginForm')!;
		form.addEventListener('submit', formH);
	}

	addListeners() {
		let formH: EventListener = this.formHandler;
		let form: Node | null = document.getElementById('loginForm');
		if (form) {
			form.addEventListener('submit', formH);
		}

		const switchFormButton = document.getElementById('switchToSignUpButton');
		switchFormButton?.addEventListener('click', function () {
			router.go('/signup');
		});
	}

	hide() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
	}

	componentDidMount() {
		updateState.onLoad(API.auth.getUser());
	}

	componentDidUpdate() {
		if (this.props.auth && this.props.auth.status === true) {
			router.go('/chats');
		}

		return true;
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.render()
		});
	}
}
export default SignIn;
