const { add } = require('./index.js')

describe('Index has to', () => {
    it('solve problem', () => {
        const res = add(2, 2)
        expect(res).toBe(4)
    })
})