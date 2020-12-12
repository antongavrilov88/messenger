import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'

class SignIn extends Block {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            })
        })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setProps({workspace: new UnauthWorkspace({
                content: new Form( formCTX )
            })})
        }, 5000);
        setTimeout(() => {
            this.setProps({workspace: new UnauthWorkspace({
                content: new Form( {...formCTX, title: 'И так могу'} )
            })})
        }, 7500);
        setTimeout(() => {
            this.setProps({workspace: new UnauthWorkspace({
                content: new Form( {...formCTX, title: 'Авторизация'} )
            })})
        }, 9000);
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.content.render() : null
        })
    }
}
export default SignIn