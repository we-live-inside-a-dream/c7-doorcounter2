const doorCounter = require('../models/doorCounter')

describe('Counter model', () => {

    async function assertCounterValue(name, value) {
        let counter = await doorCounter.getCounterValue(name)
        expect(counter.name).toBe(name)
        expect(counter.value).toBe(value)
    }

    beforeEach(() => {
        return doorCounter.deleteAll()
    })

    it('should have a zero value by default', async () => {
        let counter = await doorCounter.getCounterValue('test')
        expect(counter.name).toBe('test')
        expect(counter.value).toBe(0)
    })

    it('should accept a new value', async () => {
        let counter = await doorCounter.setCounterValue('test',10)
        expect(counter.name).toBe('test')
        expect(counter.value).toBe(10)        
        await assertCounterValue('test', 10)
    })

    it('should reset', async () => {
        let counter = await doorCounter.setCounterValue('test',10)
        expect(counter.name).toBe('test')
        expect(counter.value).toBe(10)
        
        await doorCounter.resetCounter('test')
        await assertCounterValue('test', 0)
    })

    it('should increment', async () => {
        let counter = await doorCounter.getCounterValue('test')
        expect(counter.name).toBe('test')
        expect(counter.value).toBe(0)

        await doorCounter.incrementCounter('test')
        await assertCounterValue('test', 1)
    })

    it('should decrement', async () => {
        let counter = await doorCounter.setCounterValue('test',10)
        expect(counter.name).toBe('test')
        expect(counter.value).toBe(10)
        
        await doorCounter.decrementCounter('test')
        await assertCounterValue('test', 9)
    })

    it('should not decrement past zero', async () => {
        let counter = await doorCounter.setCounterValue('test',0)
        
        await doorCounter.decrementCounter('test')
        await assertCounterValue('test', 0)
    })

    it('maintain separate values for named counters', async () => {
        await doorCounter.setCounterValue('test1',10)
        await doorCounter.setCounterValue('test2',5)
        
        await doorCounter.resetCounter('test1')
        await doorCounter.incrementCounter('test2')

        assertCounterValue('test1', 0)
        assertCounterValue('test2', 6)
    })

})