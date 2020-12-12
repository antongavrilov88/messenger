import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignInProps } from './types.js'

class SignIn extends Block<SignInProps> {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            })
        })
    }
    componentDidMount() {
        setTimeout(() => {
            this.setProps({content: new UnauthWorkspace({
                content: new Form( {...formCTX, title: 'Так могу'} )
            })})
        }, 1000);
        setTimeout(() => {
            this.setProps({content: new UnauthWorkspace({
                content: new Form( {...formCTX, title: 'И так могу'} )
            })})
        }, 2500);
        setTimeout(() => {
            this.setProps({content: new UnauthWorkspace({
                content: new Form( {...formCTX, title: 'Авторизация'} )
            })})
        }, 4000);
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignIn