const countDown = require('./counter.js');

describe('count',()=>{
    it('count down numbers', ()=>{
        const result = countDown(5)
        expect(result).toBe(5 ,4 ,3, 2 ,1)
    })
    it('count down numbers', ()=>{
        const result = countDown(3)
        expect(result).toBe(3, 2 ,1)
    })
    it('count down numbers', ()=>{
        const result = countDown(7)
        expect(result).toBe(7,6,5,4,3,2,1) //неуспешное выполнение функции
    })
})