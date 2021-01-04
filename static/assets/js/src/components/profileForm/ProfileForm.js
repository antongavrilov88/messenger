import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
class ProfileForm extends Block {
    constructor(props) {
        super("div", props);
    }
    render() {
        return this.compile(tpl, {
            id: this.props.id,
            profileData: this.props.profileData,
            formHandler: this.props.formHandler,
            modalHandler: this.props.modalHandler,
            avatarPath: this.props.avatarPath
        });
    }
}
export default ProfileForm;
//# sourceMappingURL=ProfileForm.js.map