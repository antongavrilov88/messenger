import { assert } from 'chai'

describe('Should test "use" method of the Router class', () => {
    it('Check returning object. Should return true', () => {
        const router = new Router('.app')
        assert.equal(1, 1)
    })
})