import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const signUpAPIInstance = new HTTP('/auth')

class SignUpAPI extends BaseAPI {
    create(obj: object) {
        return signUpAPIInstance.post('/signup', obj)
    }
}
export default SignUpAPI