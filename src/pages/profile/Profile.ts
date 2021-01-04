import AuthWorkspace from '../../components/authWorkSpace/AuthWorkspace'
import { profileCTX, returnBlockCTX, modalCTX, modalFormCTX } from './contexts'
import Block from '../../utils/Block'
import { tpl } from './template'
import ProfileForm from '../../components/profileForm/ProfileForm'
import ReturnBlock from '../../components/returnBlock/ReturnBlock'
import Modal from '../../components/modal/Modal'
import { ProfileProps } from './types'
import Store from '../../utils/Store'
import { stateUpdater } from '../../stateUpdater/stateUpdater'
import { ON_AVATAR_CHANGE, ON_LOAD, ON_PROFILE_CHANGE } from '../../actions'
import formHandler from '../../utils/manageForm'
import { render } from '../../utils/render'
import { API } from '../../API/mainAPI'
import { openModal } from '../../utils/manageModal'

let store = Store.getInstance()

const updateState = {
    onAvatarChange: (payload: any) => {
        stateUpdater({ type: ON_AVATAR_CHANGE, payload: payload })
    },
    onLoad: (payload: any) => {
        stateUpdater({ type: ON_LOAD, payload: payload })
    },
    onProfileChange: (payload: any) => {
        stateUpdater({ type: ON_PROFILE_CHANGE, payload: payload })
    }
}

class Profile extends Block<ProfileProps> {
    constructor() {
        super("div", {
            content: new AuthWorkspace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ProfileForm({...profileCTX, avatarPath: store.state.user ? store.state.user.avatar : ''}),
                    new Modal(modalCTX)
                ],
            })
        })
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    stateToProps(state: { user: { userID: any } }) {
        this.setProps({
            content: new AuthWorkspace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ProfileForm({...profileCTX, avatarPath: store.state.user ? store.state.user.avatar : ''}),
                    new Modal(modalCTX)
                ],
            }),
            profileUpdated: store.state.userProfileUpdated ? store.state.userProfileUpdated : false,
            // user: store.state.user ? store.state.user : null
        })
    }

    avatarFormHandler = (event: Event) => {
            event.preventDefault();
            const myUserForm: HTMLFormElement = document.getElementById(modalFormCTX.id) as HTMLFormElement
            const form = new FormData(myUserForm);
            updateState.onAvatarChange(API.user.updateAvatar({data: form}))
        }

    profileFormHandler = (ev: Event) => {
        ev.preventDefault()
        let res: any = formHandler(profileCTX.id)
        if (res) {
            updateState.onProfileChange(API.user.updateProfile(res))
        }
    }

    show() {
        render(".app", this)
        this.addListeners()
    }

    hide() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
    }

    addListeners() {
        const myUserForm: HTMLFormElement = document.getElementById(modalFormCTX.id) as HTMLFormElement
        myUserForm.addEventListener('submit', this.avatarFormHandler);

        let profileFormHandler: EventListener = this.profileFormHandler
        let profileForm: Node = document.getElementById('changeProfileForm')!
        profileForm.addEventListener('submit', profileFormHandler)

        let avatarButton = document.getElementById('avatarOpenModalButton')
        avatarButton?.addEventListener('click', function () {
            openModal('avatarForm')
        })
    }

    componentDidMount() {
        updateState.onLoad(API.auth.getUser())
    }

    componentDidUpdate() {
        if ( this.props.profileUpdated && this.props.profileUpdated === true ) {
            updateState.onLoad(API.auth.getUser())
        }
        return true
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default Profile