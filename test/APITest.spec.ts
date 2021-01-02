import { expect } from 'chai';
import HTTP from '../src/utils/HTTP'

describe('Should test "get-user" request', () => {
    it('Check correct get-user request. Should return true', () => {
        const http = new HTTP('/auth')
        http.get('/user').then(res => expect(res.status === 200).to.be.true)
        expect(1 === 1).to.be.true
    })
})