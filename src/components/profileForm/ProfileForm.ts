import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ProfileForm extends Block {
    constructor(props) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            profileData: this.props.profileData,
            handler: this.props.handler
        })
    }
}
export default ProfileForm