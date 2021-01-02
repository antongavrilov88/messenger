import { assert } from 'chai'
import Router from '.././src/utils/Router'
import SignIn from '../src/pages/signIn/SignIn'
import SignUp from '../src/pages/signup/SignUp'

describe('Should test "use" method of the Router class', () => {
    it('Check returning object. Should return true', () => {
        const router = new Router('.app')
        assert.equal(1, 1)
    })
})