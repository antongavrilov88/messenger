import UnauthWorkspace from "../../components/unauthWorkSpace/UnauthWorkspace.js";
import { formCTX } from "./contexts.js";
import Block from "../../utils/Block.js";
import Form from "../../components/form/Form.js";
import { tpl } from "./template.js";
import Store from "../../utils/Store.js";
import AuthAPI from "../../API/AuthAPI.js";
import { ON_SIGNUP, ON_LOAD } from "../../actions.js";
import { stateUpdater } from "../../stateUpdater/stateUpdater.js";
import formHandler from "../../utils/manageForm.js";
import { render } from "../../utils/render.js";
import Button from "../../components/button/Button.js";
import { router } from "../../index.js";
import { switchFormButtonCTX } from "../signup/contexts.js";
let store = Store.getInstance();
let authAPI = new AuthAPI;
const updateState = {
    onSignUp: (payload) => {
        stateUpdater({ type: ON_SIGNUP, payload: payload });
    },
    onLoad: (payload) => {
        stateUpdater({ type: ON_LOAD, payload: payload });
    }
};
class SignUp extends Block {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: [
                    new Form(formCTX),
                    new Button(switchFormButtonCTX)
                ]
            })
        });
        this.formHandler = (ev) => {
            ev.preventDefault();
            let res = formHandler(formCTX.id);
            if (res) {
                updateState.onSignUp(authAPI.signUp(res));
            }
        };
        this.stateToProps = this.stateToProps.bind(this);
        store.subscribe(this.stateToProps);
    }
    stateToProps(state) {
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
        let formH = this.formHandler;
        let form = document.getElementById('signUpForm');
        if (form) {
            form.addEventListener('submit', formH);
        }
        const switchFormButton = document.getElementById('switchToSignInButton');
        switchFormButton === null || switchFormButton === void 0 ? void 0 : switchFormButton.addEventListener('click', function () {
            router.go('/signin');
        });
    }
    show() {
        render(".app", this);
        let formH = this.formHandler;
        let form = document.getElementById('signUpForm');
        form.addEventListener('submit', formH);
    }
    hide() {
        let root = document.querySelector('.app');
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
//# sourceMappingURL=SignUp.js.map