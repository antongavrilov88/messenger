import Block from '../../utils/Block.js';
import { tpl } from './template.js';
import formHandler from '../../utils/manageForm.js';
import { openModal, closeModal } from '../../utils/manageModal.js';
import validateInput from '../../utils/validateInput.js';
class ProfileForm extends Block {
    constructor(props) {
        super("div", props);
    }
    componentDidMount() {
        window.formHandler = formHandler;
        window.openModal = openModal;
        window.closeModal = closeModal;
        window.validateInput = validateInput;
    }
    render() {
        return this.compile(tpl, {
            profileData: this.props.profileData,
            formHandler: this.props.formHandler,
            modalHandler: this.props.modalHandler
        });
    }
}
export default ProfileForm;
//# sourceMappingURL=ProfileForm.js.map