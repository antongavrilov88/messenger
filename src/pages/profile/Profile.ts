import AuthWorkspace from '../../components/authWorkSpace/AuthWorkspace.js'
import { profileCTX, returnBlockCTX, modalCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import ProfileForm from '../../components/profileForm/ProfileForm.js'
import ReturnBlock from '../../components/returnBlock/ReturnBlock.js'
import Modal from '../../components/modal/Modal.js'
import { ProfileProps } from './types.js'
import Store from '../../utils/Store.js'
import UserAPI from '../../API/UserAPI.js'
import AuthAPI from '../../API/AuthAPI.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_AVATAR_CHANGE, ON_LOAD, ON_PROFILE_CHANGE } from '../../actions.js'
import formHandler from '../../utils/manageForm.js'
import { render } from '../../utils/render.js'

let store = Store.getInstance()

let userAPI = new UserAPI
let authAPI = new AuthAPI

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
        console.log(store.state.user)
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
            updateState.onAvavtarChange(userAPI.updateAvatar(res))
        }
        console.log(res)
        console.log(userAPI.updateAvatar(res))
    }

    profileFormHandler = (ev: Event) => {
        console.log('pipiska')
        ev.preventDefault()
        let res: any = formHandler(profileCTX.id)
        if (res) {
            updateState.onProfileChange(userAPI.updateProfile(res))
        }
    }

    show() {
        render(".app", this)

        let formH: EventListener = this.avatarFormHandler
        let form: Node = document.getElementById('avatarForm')!
        form.addEventListener('submit', formH)

        let formH2: EventListener = this.profileFormHandler
        let form2: Node = document.getElementById('changeProfileForm')!
        form2.addEventListener('submit', formH2)
        console.log(form, formH, form2, formH2)
    }

    componentDidMount() {
        updateState.onLoad(authAPI.getUser())
        console.log(store.state)
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default Profile