import Block from '../../utils/Block.js'
import ChangePassword from '../../components/changePassword/ChangePassword.js'
import { tpl } from './template.js'
import AuthWorkSpace from '../../components/authWorkSpace/AuthWorkspace.js'
import ReturnBlock from '../../components/returnBlock/ReturnBlock.js'
import { returnBlockCTX, changePasswordFormCTX } from './contexts.js'
import { ChangePasswordPageProps } from './types.js'
import Store from '../../utils/Store.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_CHANGE_PASSWORD, ON_LOAD } from '../../actions.js'
import formHandler from '../../utils/manageForm.js'
import { render } from '../../utils/render.js'
import { router } from '../index.js'
import { API } from '../../API/mainApi.js'


let store = Store.getInstance()

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
                    new ChangePassword(changePasswordFormCTX)
                ]
            })
        })
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    stateToProps(state: any) {
        this.setProps({
            content: new AuthWorkSpace({
                content: [
                    new ReturnBlock(returnBlockCTX),
                    new ChangePassword(changePasswordFormCTX)
                ]
            }),
            auth: store.state.auth
        })
    }

    formHandler = (ev: Event) => {
        ev.preventDefault()
        let res = formHandler(changePasswordFormCTX.id)
        if (res) {
            updateState.onChangePassword(API.user.updatePassword(res))
        }
        console.log( store.state )
    }

    show() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
        render(".app", this)
        
        let formH: EventListener = this.formHandler
        let form: Node = document.getElementById('changePasswordForm')!
        form.addEventListener('submit', formH)
    }

    hide() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''        
    }

    addListeners() {        
        let formH: EventListener = this.formHandler
        let form: Node = document.getElementById('changePasswordForm')!
        form.addEventListener('submit', formH)        
    }
    
    componentDidMount() {
        updateState.onLoad(API.auth.getUser())
        console.log(store.state)
    }

    componentDidUpdate() {
        console.log(this.props)
        if (this.props.auth && this.props.auth.status === false) {        
        router.go('/')
        }
        return true
    }


    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default ChangePasswordPage