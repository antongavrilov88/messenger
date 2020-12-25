import Router from '../utils/Router.js'
import SignIn from '../pages/signIn/SignIn.js'
import SignUp from './signup/SignUp.js'
import Store from '../utils/Store.js'
import ChatPage from './chatPage/ChatPage.js'

const router = new Router('.app')

let store = Store.getInstance()

router
    .use('/signin', SignIn)
    .use('/signup', SignUp)
    .use('/', ChatPage)
    .start()

    console.log(store.state)

store.state.user ? router.go('/chats') : router.go('/signin')

setTimeout(() => {
    router.go('/signup')
}, 3000);

setTimeout(() => {
    router.go('/')
}, 5000);