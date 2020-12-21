import HTTP from '../utils/HTTP.js'
import { BaseAPI } from '../utils/BaseAPI.js'

const signInAPIInstance = new HTTP('/auth')

class SignInAPI extends BaseAPI {
    create() {
        return signInAPIInstance.post('/signin', {data: {login: 'Anton', password: 'Gavrilov'}})
    }
}
export default SignInAPI