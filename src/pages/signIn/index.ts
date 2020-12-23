import { render } from '../../utils/render.js'
import SignIn from './SignIn.js'
import formHandler from '../../utils/manageForm.js'
import Store from '../../utils/Store.js'
import UnauthWorkspace from '../../components/unauthWorkSpace/UnauthWorkspace.js'
import Form from '../../components/form/Form.js'
import { formCTX } from './contexts.js'

const signIn = new SignIn()

let store = Store.getInstance()

function stateToProps(state: { auth: any }) {
    console.log(state, state.auth)
    signIn.setProps({content: new UnauthWorkspace({
        content: new Form( {...formCTX, title: state.auth} )
    })})
    console.log( state.auth.title )
}

store.subscribe(stateToProps)

setTimeout(() => {
    console.log(store.state.auth)
    store.state.auth = 'PISA'
    console.log(store.state.auth)
}, 3000);

setTimeout(() => {
    console.log(store.state.auth)
    store.state.auth = 'PISA2'
    console.log(store.state.auth)
}, 4000);

render(".app", signIn)
let form = document.getElementById( 'loginForm' )
let myForm: HTMLFormElement = form as HTMLFormElement
let formH: EventListener = formHandler(myForm) as unknown as EventListener
let button: Node = document.querySelector('.form__submit-button') !
button.addEventListener( 'click', formH )
console.log( button )