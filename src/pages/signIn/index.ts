import { render } from '../../utils/render.js'
import UnauthWorkspace from '../../components/UnauthWorkspace.js'
import Form from '../../components/Form.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'

const tpl = `{{ workspace }}`

export default class SignIn extends Block {
    constructor() {
        super("div", {
            workspace: new UnauthWorkspace({
                content: new Form(formCTX)
            }, [])
        })
    }

    render() {
        return this.compile(tpl, {
            workspace: this.props.workspace.render()
        })
    }
}

const signIn = new SignIn()

console.log(signIn )

render(".app", signIn)