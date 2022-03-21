import { sumFoo, splitFoo, multFoo } from './test-1';
let a: number;
let b: number;
let c: number;
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})
test.skip('split sentense', () => {
    const sentense = 'Hello my friends!'
    const result = splitFoo(sentense)
    expect(result[0]).toBe('Hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('friends!')
})

test.skip('sum should be correct', () => {
    const result = sumFoo(a, b)
    const result2 = sumFoo(c, b)
    expect(result).toBe(3)
    expect(result2).toBe(5)

})
test.skip('mult should be correct', () => {
    const result = multFoo(a, b)
    const result1 = multFoo(c, b)
    expect(result).toBe(2)
    expect(result1).toBe(6)
})