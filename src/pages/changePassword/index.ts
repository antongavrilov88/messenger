import AuthWorkspace from '../../components/authWorkSpace/AuthWorkspace.js'
import { render } from '../../utils/render.js'
import ReturnBlock from '../../components/ReturnBlock.js'
import ChangePassword from '../../components/ChangePassword.js'

const changePasswordForm = new ChangePassword({})

const passwordReturnBlock = new ReturnBlock({})

const workspaceChildren = [
    {
        parentNodeSelector: '.workspace__container',
        node: passwordReturnBlock.getContent()
    },
    {
        parentNodeSelector: '.workspace__container',
        node: changePasswordForm.getContent()
    }
]

const workspace = new AuthWorkspace({})

render(".app", workspace)