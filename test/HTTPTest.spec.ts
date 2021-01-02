import { expect } from 'chai';
import HTTP from '../src/utils/HTTP'

describe('Should test auth requests', () => {    
    const http =  function(path: string) { 
        return new HTTP(`${path}`)
    }
    describe('Should test signin request', () => {
        it('Check login with correct data', async () => {        
            const request = http('/auth').post('/signin', {data: '{"login":"Anton","password":"Noanton88"}'})
            let result: XMLHttpRequest
            let error: any
            try {
                result = await request
            } catch (err) {
                error = err
            } finally {
                expect(error).to.be.undefined
                expect(result.status).to.equal(200)
                expect(result.response).to.eql( 'OK' )
            }        
        })
        it('Check login after logged in', async () => {        
            const request = http('/auth').post('/signin', {data: '{"login":"HBHUsjkdhds","password":"jdhsbvjhsdbv"}'})
            let result: XMLHttpRequest
            let error: any
            try {
                result = await request
            } catch (err) {
                error = err
            } finally {
                expect(result.response).to.eql( `{"reason":"user already in system"}` )
                expect(result.status).to.equal(400)
                expect(error).to.be.undefined;
            }        
        })
    })

    describe('Check logout request', async () => {
        it('Check logout request', async () => {
            const request = http('/auth').post('/logout')
            let result: XMLHttpRequest
            let error: any
            try {
                result = await request
            } catch (err) {
                error = err
            } finally {
                expect(error).to.be.undefined
                expect(result.status).to.equal(200)
                expect(result.response).to.eql('OK')
            }
        })
    })

    describe('Should test get-user request', () => {
        it('Check unauth get-user request. Should return true', async () => {
            const request = http('/auth').get('/user')
            let result: XMLHttpRequest
            let error: any
            try {
                result = await request
            } catch (err) {
                error = err
            } finally {
                expect(error).to.be.undefined
                expect(result.status).to.eql(401)
            }
        })
    })
})