import Router from '../utils/Router.js'
import SignIn from '../pages/signIn/SignIn.js'
import SignUp from './signup/SignUp.js'
import ChatPage from './chatPage/ChatPage.js'
import InitPage from './initPage/initPage.js'

export const router = new Router('.app')

router
    .use('/signin', SignIn)
    .use('/signup', SignUp)
    .use('/chats', ChatPage)
    .use('/', InitPage)
    .start()