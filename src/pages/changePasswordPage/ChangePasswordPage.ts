import Block from '../../utils/Block.js'
import ChangePassword from '../../components/changePassword/ChangePassword.js'
import { tpl } from './template.js'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js'
import ReturnBlock from '../../components/returnBlock/ReturnBlock.js'
import { returnBlockCTX, changPasswordFormCTX } from './contexts.js'
import { ChangePasswordPageProps } from './types.js'
import Store from '../../utils/Store.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_CHANGE_PASSWORD, ON_LOAD } from '../../actions.js'
import formHandler from '../../utils/manageForm.js'
import UserAPI from '../../API/UserAPI.js'
import { render } from '../../utils/render.js'
import AuthAPI from '../../API/AuthAPI.js'


let store = Store.getInstance()

let userAPI = new UserAPI
let authAPI = new AuthAPI

const updateState = {
    onChangePassword: (payload: any) => {
        stateUpdater({type: ON_CHANGE_PASSWORD, payload: payload})
    },
    onLoad: (payload: any) => {
        stateUpdater({ type: ON_LOAD, payload: payload })
    }
}

class ChangePasswordPage extends Block<ChangePasswordPageProps> {
    constructor() {
        super("div", {
            content: new AuthWorkSpace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ChangePassword(changPasswordFormCTX)
                ]
            })
        })
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    stateToProps(state: { user: { userID: any } }) {
        this.setProps({
            content: new AuthWorkSpace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ChangePassword(changPasswordFormCTX)
                ]
            })
        })
    }

    formHandler = (ev: Event) => {
        ev.preventDefault()
        let res = formHandler(changPasswordFormCTX.id)
        if (res) {
            updateState.onChangePassword(userAPI.updatePassword(res))
        }
        console.log( store.state )
    }

    show() {
        render(".app", this)
        
        let formH: EventListener = this.formHandler
        let form: Node = document.getElementById('changePasswordForm')!
        form.addEventListener('submit', formH)
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
export default ChangePasswordPage