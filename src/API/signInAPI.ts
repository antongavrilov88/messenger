import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const signInAPIInstance = new HTTP('/auth')

class SignInAPI extends BaseAPI {
    create(obj: object) {
        console.log(obj)
        return signInAPIInstance.post('/signin', obj)
    }
}
export default SignInAPI