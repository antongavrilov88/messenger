import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignInProps } from './types.js'
import Store from '../../utils/Store.js'
import state from '../../state/State.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { TEST_ACTION } from '../../actions.js'


let store = Store.getInstance()



const updateState = {
    onLoad: (actionType: any) => {
        stateUpdater(actionType)
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
        console.log(state)
        this.setProps({
            content: new UnauthWorkspace({
                content: new Form({ ...formCTX, title: state.user.userID })
            })
        })
        console.log(state)
    }



    componentDidMount() {
        console.log(state)
        setTimeout(() => {
            Store.setState({
                user: {
                    userID: 'PISA'
                }
            })
            console.log(state)
        }, 3000);

        setTimeout(() => {
            updateState.onLoad(TEST_ACTION)
            console.log(state)
        }, 5000);


    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignIn