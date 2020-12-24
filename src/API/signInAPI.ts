import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const signInAPIInstance = new HTTP('/auth')

class SignInAPI extends BaseAPI {
    create(obj: object) {
        return signInAPIInstance.post('/signin', obj)
    }
    get() {
        return signInAPIInstance.get('/user')
    }
}
export default SignInAPI