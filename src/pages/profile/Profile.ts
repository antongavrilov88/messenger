import AuthWorkspace from '../../components/authWorkSpace/AuthWorkspace.js'
import { profileCTX, returnBlockCTX, modalCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import ProfileForm from '../../components/profileForm/ProfileForm.js'
import ReturnBlock from '../../components/returnBlock/ReturnBlock.js'
import Modal from '../../components/modal/Modal.js'


class Profile extends Block {
    constructor() {
        super("div", {
            workspace: new AuthWorkspace({
                child: [
                    new ReturnBlock(returnBlockCTX),
                    new ProfileForm(profileCTX),
                    new Modal(modalCTX)
                ],
            })
        })
    }

    render() {
        return this.compile(tpl, {
            content: this.props ? this.props.workspace.render() : null
        })
    }
}
export default Profile