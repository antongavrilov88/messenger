import AuthWorkspace from '../../components/AuthWorkspace.js'
import { render } from '../../utils/render.js'
import { errorCTX } from './contexts.js'
import Error from '../../components/Error.js'

const error = new Error(errorCTX)

const workspaceChildren = [
    {
        parentNodeSelector: '.workspace__container',
        node: error.getContent()
    }
]

const workspace = new AuthWorkspace({}, workspaceChildren)

render( '.app', workspace )