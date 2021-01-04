import AuthWorkspace from "../../components/AuthWorkSpace/AuthWorkspace.js";
import { appCTX } from "./contexts.js";
import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
import { render } from "../../utils/render.js";
import App from "../../components/app/App.js";
import Store from "../../utils/Store.js";
import { stateUpdater } from "../../stateUpdater/stateUpdater.js";
import { ON_LOAD } from "../../actions.js";
import { router } from "../../index.js";
import { API } from "../../API/mainAPI.js";
const store = Store.getInstance();
const updateState = {
    onLoad: (payload) => {
        stateUpdater({ type: ON_LOAD, payload: payload });
    }
};
class InitPage extends Block {
    constructor() {
        super("div", {
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
        let root = document.querySelector('.app');
        root.innerHTML = '';
        render('.app', this);
    }
    componentDidMount() {
        updateState.onLoad(API.auth.getUser());
        console.log(this.props.auth);
    }
    componentDidUpdate() {
        console.log(this.props.auth);
        if (this.props.auth && this.props.auth.status === true) {
            router.go('/chats');
        }
        if (this.props.auth && this.props.auth.status === false) {
            router.go('/signin');
            console.log(this.props.auth);
        }
        return true;
    }
    hide() {
        let root = document.querySelector('.app');
        root.innerHTML = '';
    }
    stateToProps(state) {
        this.setProps({
            content: new AuthWorkspace({
                content: [
                    new App(appCTX)
                ]
            }),
            auth: store.state.auth
        });
        console.log(this.props.auth);
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        });
    }
}
export default InitPage;
//# sourceMappingURL=initPage.js.map