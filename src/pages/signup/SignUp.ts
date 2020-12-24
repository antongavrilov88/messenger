import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignUpProps } from './types.js'
import Store from '../../utils/Store.js'
import AuthAPI from '../../API/AuthAPI.js'
import { ON_SIGNUP } from '../../actions.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import formHandler from '../../utils/manageForm.js'

let store = Store.getInstance()

let api = new AuthAPI

const updateState = {
    onSignUp: (payload: any) => {
        stateUpdater({type: ON_SIGNUP, payload: payload})
    }
}

class SignUp extends Block<SignUpProps> {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            })
        })
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    stateToProps(state: any ) {
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
            updateState.onSignUp(api.signUp(res))
        }
        console.log( store.state )
    }


    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignUp