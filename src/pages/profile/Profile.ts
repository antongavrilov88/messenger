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
import { ON_AVATAR_CHANGE, ON_LOAD } from '../../actions.js'
import formHandler from '../../utils/manageForm.js'

let store = Store.getInstance()

let userAPI = new UserAPI
let authAPI = new AuthAPI

const updateState = {
    onAvavtarChange: (payload: any) => {
        stateUpdater({type: ON_AVATAR_CHANGE, payload: payload})
    },
    onLoad: (payload: any) => {
        stateUpdater({type: ON_LOAD, payload: payload})
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
        let res = formHandler(modalCTX.id)
        if (res) {
            updateState.onAvavtarChange(userAPI.updateAvatar(res))
        }
        console.log( store.state )
    }

    componentDidMount() {
        updateState.onLoad(authAPI.getUser())
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default Profile