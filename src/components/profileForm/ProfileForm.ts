import Block from '../../utils/Block.js'
import { tpl } from './template.js'

class ProfileForm extends Block {
    constructor(props: object | undefined) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            profileData: this.props ? this.props.profileData : null,
            formHandler: this.props ? this.props.formHandler : null,
            modalHandler: this.props ? this.props.modalHandler : null
        })
    }
}
export default ProfileForm