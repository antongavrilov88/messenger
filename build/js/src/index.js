import Router from "./utils/Router.js";
import SignIn from "./pages/signIn/SignIn.js";
import SignUp from "./pages/signup/SignUp.js";
import ChatPage from "./pages/chatPage/ChatPage.js";
import InitPage from "./pages/initPage/initPage.js";
import ChangePasswordPage from "./pages/changePasswordPage/ChangePasswordPage.js";
import Profile from "./pages/profile/Profile.js";
export const router = new Router('.app');
router
    .use('/', InitPage)
    .use('/signin', SignIn)
    .use('/signup', SignUp)
    .use('/chats', ChatPage)
    .use('/changepassword', ChangePasswordPage)
    .use('/profile', Profile)
    .start();
//# sourceMappingURL=index.js.map