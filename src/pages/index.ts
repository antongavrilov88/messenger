import Router from '../utils/Router.js'
import SignIn from '../pages/signIn/SignIn.js'
import SignUp from './signup/SignUp.js'
import ChatPage from './chatPage/ChatPage.js'
import InitPage from './initPage/initPage.js'
import ChangePasswordPage from './changePasswordPage/ChangePasswordPage.js'

export const router = new Router('.app')

router
    .use('/', InitPage)
    .use('/signin', SignIn)
    .use('/signup', SignUp)
    .use('/chats', ChatPage)
    .use('/changepassword', ChangePasswordPage)
    .start()