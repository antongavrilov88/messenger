import AuthAPI from './AuthAPI';
import UserAPI from './UserAPI';
import ChatAPI from './ChatAPI';

export const API = {
	user: new UserAPI(),
	auth: new AuthAPI(),
	chat: new ChatAPI()
};
