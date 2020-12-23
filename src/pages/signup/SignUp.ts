import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignUpProps } from './types.js'
import Store from '../../utils/Store.js'

let store = Store.getInstance()

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

    stateToProps(state: { auth: any, reg: any }) {
        this.setProps({
            content: new UnauthWorkspace({
                content: new Form({ ...formCTX, title: state.reg })
            })
        })
    }

    componentDidMount() {
        setTimeout(() => {
            store.state.reg = 'REG_PISA'
        }, 3000);
        
        setTimeout(() => {
            store.state.reg = 'REG_PISA3'
        }, 4000);
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignUp