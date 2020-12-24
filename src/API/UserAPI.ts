import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const changePasswordAPIInstance = new HTTP('/user')

class AuthAPI extends BaseAPI {
    updatePassword(obj: object) {
        return changePasswordAPIInstance.put('/password', obj)
    }
}
export default AuthAPI