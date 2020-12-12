import AuthWorkspace from '../../components/authWorkSpace/AuthWorkspace.js'
import { profileCTX, returnBlockCTX, modalCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import ProfileForm from '../../components/profileForm/ProfileForm.js'
import ReturnBlock from '../../components/returnBlock/ReturnBlock.js'
import Modal from '../../components/modal/Modal.js'
import { ProfileProps } from './types.js'


class Profile extends Block<ProfileProps> {
    constructor() {
        super("div", {
            content: new AuthWorkspace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ProfileForm(profileCTX),
                    new Modal(modalCTX)
                ],
            })
        })
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default Profile