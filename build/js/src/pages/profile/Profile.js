import AuthWorkspace from "../../components/authWorkSpace/AuthWorkspace.js";
import { profileCTX, returnBlockCTX, modalCTX, modalFormCTX } from "./contexts.js";
import Block from "../../utils/Block.js";
import { tpl } from "./template.js";
import ProfileForm from "../../components/profileForm/ProfileForm.js";
import ReturnBlock from "../../components/returnBlock/ReturnBlock.js";
import Modal from "../../components/modal/Modal.js";
import Store from "../../utils/Store.js";
import { stateUpdater } from "../../stateUpdater/stateUpdater.js";
import { ON_AVATAR_CHANGE, ON_LOAD, ON_PROFILE_CHANGE } from "../../actions.js";
import formHandler from "../../utils/manageForm.js";
import { render } from "../../utils/render.js";
import { API } from "../../API/mainAPI.js";
import { openModal } from "../../utils/manageModal.js";
let store = Store.getInstance();
const updateState = {
    onAvatarChange: (payload) => {
        stateUpdater({ type: ON_AVATAR_CHANGE, payload: payload });
    },
    onLoad: (payload) => {
        stateUpdater({ type: ON_LOAD, payload: payload });
    },
    onProfileChange: (payload) => {
        stateUpdater({ type: ON_PROFILE_CHANGE, payload: payload });
    }
};
class Profile extends Block {
    constructor() {
        super("div", {
            content: new AuthWorkspace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ProfileForm(Object.assign(Object.assign({}, profileCTX), { avatarPath: store.state.user ? store.state.user.avatar : '' })),
                    new Modal(modalCTX)
                ],
            })
        });
        this.avatarFormHandler = (event) => {
            event.preventDefault();
            const myUserForm = document.getElementById(modalFormCTX.id);
            const form = new FormData(myUserForm);
            updateState.onAvatarChange(API.user.updateAvatar({ data: form }));
        };
        this.profileFormHandler = (ev) => {
            ev.preventDefault();
            let res = formHandler(profileCTX.id);
            if (res) {
                updateState.onProfileChange(API.user.updateProfile(res));
            }
        };
        this.stateToProps = this.stateToProps.bind(this);
        store.subscribe(this.stateToProps);
    }
    stateToProps(state) {
        this.setProps({
            content: new AuthWorkspace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ProfileForm(Object.assign(Object.assign({}, profileCTX), { avatarPath: store.state.user ? store.state.user.avatar : '' })),
                    new Modal(modalCTX)
                ],
            }),
            profileUpdated: store.state.userProfileUpdated ? store.state.userProfileUpdated : false,
        });
    }
    show() {
        render(".app", this);
        this.addListeners();
    }
    hide() {
        let root = document.querySelector('.app');
        root.innerHTML = '';
    }
    addListeners() {
        const myUserForm = document.getElementById(modalFormCTX.id);
        myUserForm === null || myUserForm === void 0 ? void 0 : myUserForm.addEventListener('submit', this.avatarFormHandler);
        let profileFormHandler = this.profileFormHandler;
        let profileForm = document.getElementById('changeProfileForm');
        profileForm.addEventListener('submit', profileFormHandler);
        let avatarButton = document.getElementById('avatarOpenModalButton');
        avatarButton === null || avatarButton === void 0 ? void 0 : avatarButton.addEventListener('click', function () {
            openModal('avatarForm');
        });
    }
    componentDidMount() {
        updateState.onLoad(API.auth.getUser());
    }
    componentDidUpdate() {
        if (this.props.profileUpdated && this.props.profileUpdated === true) {
            updateState.onLoad(API.auth.getUser());
        }
        return true;
    }
    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        });
    }
}
export default Profile;
//# sourceMappingURL=Profile.js.map