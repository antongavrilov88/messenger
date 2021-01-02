import AuthWorkspace from '../../components/authWorkSpace/AuthWorkspace'
import { profileCTX, returnBlockCTX, modalCTX } from './contexts'
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
    onAvavtarChange: (payload: any) => {
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
                    new ProfileForm(profileCTX),
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
                    new ProfileForm(profileCTX),
                    new Modal(modalCTX)
                ],
            })
        })
    }

    avatarFormHandler = (ev: Event) => {
        ev.preventDefault()
        let form = document.getElementById(modalCTX.id)!
        let myForm: HTMLFormElement = form as HTMLFormElement
        let res = new FormData(myForm)
        if (res) {
            updateState.onAvavtarChange(API.user.updateAvatar(res))
        }
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
        let formH: EventListener = this.avatarFormHandler
        let form: Node = document.getElementById('avatarForm')!
        form.addEventListener('submit', formH)

        let formH2: EventListener = this.profileFormHandler
        let form2: Node = document.getElementById('changeProfileForm')!
        form2.addEventListener('submit', formH2)

        let avatarButton = document.getElementById('avatarOpenModalButton')
        avatarButton?.addEventListener('click', function() {
            openModal('avatarForm')
        })
    }

    componentDidMount() {
        updateState.onLoad(API.auth.getUser())
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default Profile