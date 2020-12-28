import AuthAPI from "./AuthAPI.js";
import UserAPI from "./UserAPI.js";
import ChatAPI from './ChatAPI.js'

export const API = {
    user: new UserAPI,
    auth: new AuthAPI,
    chat: new ChatAPI
}