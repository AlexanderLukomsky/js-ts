import { filterNumbers, numbers } from "./04filter"

test.skip('age equal and over 99', () => {
    const newNumbers = filterNumbers(numbers)
    expect(newNumbers.length).toBe(3)
    expect(numbers.length).toBe(10)
})