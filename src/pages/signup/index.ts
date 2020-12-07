import { render } from '../../utils/render.js'
import UnauthWorkspace from '../../components/UnauthWorkspace.js'
import Form from '../../components/form/Form.js'
import { formCTX } from './contexts.js'

const form = new Form(formCTX)

const workspaceChildren = [
    {
        parentNodeSelector: '.container',
        node: form.getContent()
    }
]

const workspace = new UnauthWorkspace({})

render(".app", workspace)

setTimeout(() => {
    form.setProps({
        title: 'pisun'
    })
}, 3000);

setTimeout(() => {
    form.setProps({
        title: 'Снова Авториз'
    })
}, 5000);