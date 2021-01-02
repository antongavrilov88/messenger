import { expect } from 'chai'
import { isEqual } from '../src/utils/isEqual'

describe('Should say if two objects are equal', () => {
    it('Compare to empty object. Should return "false"', () => {
        expect(isEqual({}, {a: 'test'})).to.be.false
    })
    it('Compare two equal plain objects. Should return "true"', () => {
        // assert.equal(isEqual({a: 'test'}, {a: 'test'}), true)
        expect(isEqual({a: 'test'}, {a: 'test'})).to.be.true
    })
    it('Compare two equal objects with arrays inside. Should return "true"', () => {
        expect(isEqual({a: 'test', b: [1,2,3]}, {a: 'test', b: [1,2,3]})).to.be.true
    })
    it('Compare two not equal objects(subObject in Array case)Should return "false"', () => {
        expect(isEqual({a: 'test', b: [1,2,{c: 'test'}]}, {a: 'test', b: [1,2,3]})).to.be.false
    })
    it('Compare two equal objects with arrays and null. Should return "true"', () => {
        expect(isEqual({a: 'test', b: [1,2,{c: 'test', f:{g: [5,6,null]}}]}, {a: 'test', b: [1,2,{c: 'test', f:{g: [5,6,null]}}]})).to.be.true
    })
})