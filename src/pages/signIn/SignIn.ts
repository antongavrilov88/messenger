import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import { formCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import Form from '../../components/form/Form.js'
import { tpl } from './template.js'
import { SignInProps } from './types.js'
import Store from '../../utils/Store.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_LOGIN, ON_LOAD } from '../../actions.js'
import AuthAPI from "../../API/AuthAPI.js";
import formHandler from '../../utils/manageForm.js'
import { render } from '../../utils/render.js'
import { router } from '../index.js'

let store = Store.getInstance()

let authAPI = new AuthAPI

const updateState = {
    onLogin: (payload: any) => {
        stateUpdater({type: ON_LOGIN, payload: payload})
    },
    onLoad: (payload: any) => {
        stateUpdater({ type: ON_LOAD, payload: payload })
    }
}

class SignIn extends Block<SignInProps> {
    constructor() {
        super("div", {
            content: new UnauthWorkspace({
                content: new Form(formCTX)
            })
        })
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    stateToProps(state: any) {
        this.setProps({
            content: new UnauthWorkspace({
                content: new Form({ ...formCTX })
            }),
            auth: store.state.auth
        })
        console.log(this.props)
    }

    formHandler = (ev: Event) => {
        ev.preventDefault()
        let res = formHandler(formCTX.id)
        if (res) {
            updateState.onLogin(authAPI.signIn(res))
        }
    }
    show() {
        render(".app", this)
        console.log('pisa')
        let formH: EventListener = this.formHandler
        let form: Node = document.getElementById('loginForm')!
        console.log(form)
        form.addEventListener('submit', formH) 
    }

    addListeners() {  
        console.log('pisa')
        let formH: EventListener = this.formHandler
        let form: Node | null = document.getElementById('loginForm')
        if ( form ) {
        form.addEventListener('submit', formH)      
        }
    }

    hide() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
    }
    
    componentDidMount() {
        updateState.onLoad(authAPI.getUser())
    }

    componentDidUpdate() {
        console.log(this.props)
        if (this.props.auth && this.props.auth.status === true) {        
        router.go('/chats')
        }
        return true
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default SignIn