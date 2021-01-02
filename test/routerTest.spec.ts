import { expect } from 'chai'
import Router from '.././src/utils/Router'
import App from '../src/components/app/App'
import { isEqual } from '../src/utils/isEqual'
import HTTP from '../src/utils/HTTP'

describe('Should test "use" method of the Router class', () => {
    it('Check returning object. Should return true', () => {
        const router = new Router('.app')
        expect(router === router.use('/some', App)).to.be.true
    })
})

describe('Should test "get-user" request', () => {    
    const http = new HTTP('/auth')
    const x = http.get('/user')
    it('Check correct get-user request. Should return true', async () => {
        let result: XMLHttpRequest
        let error: any
        try {
            result = await x
        } catch (err) {
            error = err
        } finally {
            expect(error).to.be.undefined
            expect(JSON.parse(result.response)).to.eql({ reason: 'Cookie is not valid' } )
        }
    })
})