import Router from './utils/Router';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signup/SignUp';
import ChatPage from './pages/chatPage/ChatPage';
import InitPage from './pages/initPage/initPage';
import ChangePasswordPage from './pages/changePasswordPage/ChangePasswordPage';
import Profile from './pages/profile/Profile';
import './scss/style.scss';

export const router = new Router('.app');

router
	.use('/', InitPage)
	.use('/signin', SignIn)
	.use('/signup', SignUp)
	.use('/chats', ChatPage)
	.use('/changepassword', ChangePasswordPage)
	.use('/profile', Profile)
	.start();
