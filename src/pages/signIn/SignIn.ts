import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignInProps } from './types.js'
import Store from '../../utils/Store.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_LOGIN } from '../../actions.js'
import AuthAPI from "../../API/AuthAPI.js";
import formHandler from '../../utils/manageForm.js'

let store = Store.getInstance()

let api = new AuthAPI

const updateState = {
    onLogin: (payload: any) => {
        stateUpdater({type: ON_LOGIN, payload: payload})
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
                content: new Form({ ...formCTX })
            })
        })
    }

    formHandler = (ev: Event) => {
        ev.preventDefault()
        let res = formHandler(formCTX.id)
        if (res) {
            updateState.onLogin(api.signIn(res))
        }
        console.log( store.state )
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignIn