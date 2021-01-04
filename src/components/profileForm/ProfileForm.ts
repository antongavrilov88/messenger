import Block from '../../utils/Block'
import { tpl } from './template'
import { ProfileFormProps } from './types'

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
            avatarPath: this.props.avatarPath
        })
    }
}
export default ProfileForm