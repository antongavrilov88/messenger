import { render } from '../../utils/render.js'
import AuthWorkspace from '../../components/AuthWorkspace.js'
import { profileCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import ProfileForm from '../../components/profileForm/ProfileForm.js'


class Profile extends Block {
    constructor() {
        super("div", {
            workspace: new AuthWorkspace({
                child: new ProfileForm(profileCTX)
            })
        })
    }

    render() {
        return this.compile(tpl, {
            content: this.props.workspace.render()
        })
    }
}
export default Profile