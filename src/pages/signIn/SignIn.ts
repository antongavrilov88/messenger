import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignInProps } from './types.js'
import Store from '../../utils/Store.js'


let store = Store.getInstance()



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

    stateToProps(state: { auth: any }) {
        console.log(`вызываем с ${state.auth}`)
        const self = this
        self.setProps({
            content: new UnauthWorkspace({
                content: new Form({ ...formCTX, title: state.auth })
            })
        })
    }

    componentDidMount() {
        setTimeout(() => {
            store.state.auth = 'PISA'
            setTimeout(() => {
                store.state.auth = 'PISA2'
            }, 4000);
        }, 3000);
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignIn