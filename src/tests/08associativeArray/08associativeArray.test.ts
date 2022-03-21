import { newUsers, usersObj, UsersType } from './08associativeArray';
let users: UsersType
beforeEach(() => {
    users = {
        '111231': { id: 111231, name: 'Alex' },
        '22123': { id: 22123, name: 'Dima' },
        '301232': { id: 301232, name: 'Egor' },
        '4222': { id: 4222, name: 'Roma' }
    };
})
test.skip('usersObj', () => {
    expect(usersObj[0]).toBe('Alex')
    expect(usersObj[1]).toBe('Dima')
    expect(usersObj[2]).toBe('Egor')
    expect(usersObj[3]).toBe('Roma')
})
test.skip('newUsers', () => {
    expect(newUsers['111231'].name).toBe('Alex')
    expect(newUsers['22123'].name).toBe('Dima')
    expect(newUsers['301232'].name).toBe('Egor')
    expect(newUsers['4222'].name).toBe('Roma')
})
test.skip('users', () => {
    expect(users['111231'].id.toString()).toBe(Object.keys(users).sort()[0])
    expect(users['22123'].id.toString()).toBe(Object.keys(users).sort()[1])
    expect(users['301232'].id.toString()).toBe(Object.keys(users).sort()[2])
    expect(users['4222'].id.toString()).toBe(Object.keys(users).sort()[3])
})
test.skip('should update corresponding user', () => {
    users['4222'].name = 'Roman'
    expect(users['4222'].name).toBe('Roman')
})
test.skip('should delete corresponding user', () => {
    delete users['4222']
    expect(users['4222']).toBeUndefined()
})