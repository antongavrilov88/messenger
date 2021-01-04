import HTTP from '../utils/HTTP'
import { BaseAPI } from '../utils/BaseAPI'

const userAPIInstance = new HTTP('/user')

class UserAPI extends BaseAPI {
    updatePassword(obj: object) {
        return userAPIInstance.put('/password', obj)
    }
    updateAvatar(obj: object) {
        return userAPIInstance.put('/profile/avatar', {...obj, headers: true})
    }
    updateProfile(obj: object) {
        return userAPIInstance.put('/profile', obj)
    }
    searchUser(obj: object) {
        return userAPIInstance.post('/search', obj)
    }
}
export default UserAPI