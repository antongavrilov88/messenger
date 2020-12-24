import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const authAPIInstance = new HTTP('/auth')

class AuthAPI extends BaseAPI {
    signIn(obj: object) {
        return authAPIInstance.post('/signin', obj)
    }
    logout() {
        return authAPIInstance.post('/logout')
    }
    getUser() {
        return authAPIInstance.get('/user')
    }
    signUp(obj: object) {
        console.log(obj)
        return authAPIInstance.post('/signup', obj)
    }
}
export default AuthAPI