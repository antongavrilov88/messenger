import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

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
}
export default UserAPI