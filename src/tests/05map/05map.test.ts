import { PeopleType } from "./05map"
let people: PeopleType[]
beforeEach(() => {
    people = [
        { name: 'Petr Petrov', age: 40 },
        { name: 'Vasya Ivanov', age: 25 },
        { name: 'Dima Egorov', age: 15 }
    ]
})
test.skip('should get array of greeting messages', () => {
    const greetingMessages = people.map(man => `Hi ${man.name.split(' ')[0]}`)
    expect(greetingMessages.length).toBe(3)
    expect(greetingMessages[0]).toBe('Hi Petr')
    expect(greetingMessages[1]).toBe('Hi Vasya')
    expect(greetingMessages[2]).toBe('Hi Dima')
})