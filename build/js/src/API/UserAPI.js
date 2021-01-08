import HTTP from "../utils/HTTP.js";
import { BaseAPI } from "../utils/BaseAPI.js";
const userAPIInstance = new HTTP('/user');
class UserAPI extends BaseAPI {
    updatePassword(obj) {
        return userAPIInstance.put('/password', obj);
    }
    updateAvatar(obj) {
        return userAPIInstance.put('/profile/avatar', Object.assign(Object.assign({}, obj), { headers: true }));
    }
    updateProfile(obj) {
        return userAPIInstance.put('/profile', obj);
    }
    searchUser(obj) {
        return userAPIInstance.post('/search', obj);
    }
}
export default UserAPI;
//# sourceMappingURL=UserAPI.js.map