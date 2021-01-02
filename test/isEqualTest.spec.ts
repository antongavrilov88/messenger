import { assert } from 'chai'
import { isEqual } from '../src/utils/isEqual'

describe('Should say if two objects are equal', () => {
    it('Compare to empty object. Should return "false"', () => {
        assert.equal(isEqual({}, {a: 'test'}), false)
    })
    it('Compare two equal plain objects. Should return "true"', () => {
        assert.equal(isEqual({a: 'test'}, {a: 'test'}), true)
    })
    it('Compare two equal objects with arrays inside. Should return "true"', () => {
        assert.equal(isEqual({a: 'test', b: [1,2,3]}, {a: 'test', b: [1,2,3]}), true)
    })
    it('Compare two not equal objects(subObject in Array case)Should return "false"', () => {
        assert.equal(isEqual({a: 'test', b: [1,2,{c: 'test'}]}, {a: 'test', b: [1,2,3]}), false)
    })
    it('Compare two equal objects with arrays and null. Should return "true"', () => {
        assert.equal(isEqual({a: 'test', b: [1,2,{c: 'test', f:{g: [5,6,null]}}]}, {a: 'test', b: [1,2,{c: 'test', f:{g: [5,6,null]}}]}), true)
    })
})