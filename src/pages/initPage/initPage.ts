import AuthWorkspace from '../../components/AuthWorkSpace/AuthWorkspace.js'
import { appCTX } from './contexts.js'
import Block from '../../utils/Block.js'
import { tpl } from './template.js'
import { InitPageProps } from './types.js'
import { render } from '../../utils/render.js'
import App from '../../components/app/App.js'
import Store from '../../utils/Store.js'
import AuthAPI from '../../API/AuthAPI.js'
import { stateUpdater } from '../../stateUpdater/stateUpdater.js'
import { ON_LOAD } from '../../actions.js'
import { router } from '../index.js'

const store = Store.getInstance()

let authAPI = new AuthAPI

const updateState = {
    onLoad: (payload: any) => {
        stateUpdater({ type: ON_LOAD, payload: payload })
    }
}

class InitPage extends Block<InitPageProps> {
    constructor() {
        super("div", {
            content: new AuthWorkspace({
                content: [
                    new App(appCTX)
                ]
            })
        })
        this.stateToProps = this.stateToProps.bind(this)
        store.subscribe(this.stateToProps)
    }

    show() {
        render( '.app', this )
    }

    componentDidMount() {
        updateState.onLoad(authAPI.getUser())
    }
    
    componentDidUpdate() {
        console.log(this.props)
        if (this.props.auth && !this.props.auth.status === true) {        
        router.go('/chats')
        }
        if (this.props.auth && this.props.auth.status === false) {        
        router.go('/signin')
        }
        return true
    }    
    
    hide() {
        let root = document.querySelector('.app')!
        root.innerHTML = ''
    }

    stateToProps(state: any) {
        this.setProps({
            content: new AuthWorkspace({
                content: [
                    new App(appCTX)
                ]
            }),
            auth: store.state.auth
        })
        console.log(this.props)
    }

    render() {
        return this.compile(tpl, {
            content: this.props.content.render()
        })
    }
}
export default InitPage