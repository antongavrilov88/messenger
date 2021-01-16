import AuthWorkspace from '../../components/AuthWorkSpace/AuthWorkspace';
import {appCTX} from './contexts';
import Block from '../../utils/Block';
import {tpl} from './template';
import {InitPageProps} from './types';
import {render} from '../../utils/render';
import App from '../../components/app/App';
import Store from '../../utils/Store';
import {stateUpdater} from '../../stateUpdater/stateUpdater';
import {ON_LOAD} from '../../actions';
import {router} from '../../index';
import {API} from '../../API/mainAPI';

const store = Store.getInstance();

const updateState = {
	onLoad: (payload: any) => {
		stateUpdater({type: ON_LOAD, payload: payload});
	}
};

class InitPage extends Block<InitPageProps> {
	constructor() {
		super('div', {
			content: new AuthWorkspace({
				content: [
					new App(appCTX)
				]
			})
		});
		this.stateToProps = this.stateToProps.bind(this);
		store.subscribe(this.stateToProps);
	}

	show() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
		render('.app', this);
	}

	componentDidMount() {
		updateState.onLoad(API.auth.getUser());
	}

	componentDidUpdate() {
		if (this.props.auth && this.props.auth.status === true) {
			router.go('/chats');
		}

		if (this.props.auth && this.props.auth.status === false) {
			router.go('/signin');
		}

		return true;
	}

	hide() {
		let root = document.querySelector('.app')!;
		root.innerHTML = '';
	}

	stateToProps() {
		this.setProps({
			content: new AuthWorkspace({
				content: [
					new App(appCTX)
				]
			}),
			auth: store.state.auth
		});
	}

	render() {
		return this.compile(tpl, {
			content: this.props.content.render()
		});
	}
}
export default InitPage;
