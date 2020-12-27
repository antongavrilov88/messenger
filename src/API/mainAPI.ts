import AuthAPI from "./AuthAPI.js";
import UserAPI from "./UserAPI.js";

export const API = {
    user: new UserAPI,
    auth: new AuthAPI
}