import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignInProps } from './types.js'
import Store from '../../utils/Store.js'
// import state from '../../state/State.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { TEST_ACTION, ON_LOGIN } from '../../actions.js'
// import state from '../../state/State.js'
import SignInAPI from "../../API/SignUpAPI.js";


let store = Store.getInstance()

let api = new SignInAPI

const updateState = {
    onLoad: (action: any) => {
        stateUpdater(action)
    },
    onLogin: (action: any) => {
        stateUpdater(action)
    }
}

class SignIn extends Block<SignInProps> {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            })
        })
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    stateToProps(state: { user: { userID: any } }) {
        this.setProps({
            content: new UnauthWorkspace({
                content: new Form({ ...formCTX, title: state.user.userID })
            })
        })
    }



    componentDidMount() {

        setTimeout(() => {
            updateState.onLoad({type: TEST_ACTION})
        }, 3000);

        setTimeout(async () => {
            updateState.onLogin({type: ON_LOGIN, payload: await api.create({login: 'Anton', password: 'Gavrilov'}).then(  res => res.response )})
        }, 5000);


    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignIn