import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const authAPIInstance = new HTTP('/auth')

class AuthAPI extends BaseAPI {
    signUp(obj: object) {
        return authAPIInstance.post('/signup', obj)
    }
    signIn(obj: object) {
        return authAPIInstance.post('/signin', obj)
    }
    logout() {
        return authAPIInstance.post('/logout')
    }
    getUser() {
        return authAPIInstance.get('/user')
    }
}
export default AuthAPI