import UnauthWorkspace from "../../components/unauthWorkSpace/UnauthWorkspace.js";
import { formCTX } from "./contexts.js";
import Block from "../../utils/Block.js";
import Form from "../../components/form/Form.js";
import { tpl } from "./template.js";
import Store from "../../utils/Store.js";
import { stateUpdater } from "../../stateUpdater/stateUpdater.js";
import { ON_LOGIN, ON_LOAD } from "../../actions.js";
import formHandler from "../../utils/manageForm.js";
import { render } from "../../utils/render.js";
import { router } from "../../index.js";
import { API } from "../../API/mainAPI.js";
let store = Store.getInstance();
const updateState = {
    onLogin: (payload) => {
        stateUpdater({ type: ON_LOGIN, payload: payload });
    },
    onLoad: (payload) => {
        stateUpdater({ type: ON_LOAD, payload: payload });
    }
};
class SignIn extends Block {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            })
        });
        this.formHandler = (ev) => {
            ev.preventDefault();
            let res = formHandler(formCTX.id);
            if (res) {
                updateState.onLogin(API.auth.signIn(res));
            }
        };
        this.stateToProps = this.stateToProps.bind(this);
        store.subscribe(this.stateToProps);
    }
    stateToProps(state) {
        this.setProps({
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            }),
            auth: store.state.auth
        });
    }
    show() {
        let root = document.querySelector('.app');
        root.innerHTML = '';
        render(".app", this);
        let formH = this.formHandler;
        let form = document.getElementById('loginForm');
        form.addEventListener('submit', formH);
    }
    addListeners() {
        let formH = this.formHandler;
        let form = document.getElementById('loginForm');
        if (form) {
            form.addEventListener('submit', formH);
        }
    }
    hide() {
        let root = document.querySelector('.app');
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
//# sourceMappingURL=SignIn.js.map