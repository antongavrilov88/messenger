import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { ProfileFormProps } from './types.js'

class ProfileForm extends Block<ProfileFormProps> {
    constructor(props: ProfileFormProps) {
        super("div", props)
    }

    render() {
        return this.compile(tpl, {
            id: this.props.id,
            profileData: this.props.profileData,
            formHandler: this.props.formHandler,
            modalHandler: this.props.modalHandler,
            submitButton: this.props.submitButton.render()
        })
    }
}
export default ProfileForm