import { UsersType } from './../08associativeArray/08associativeArray';
type UserType = {
    name: string,
    age: number
}
type UserObjType = UserType & { address: { title: string } }
const increaceAge = (u: any) => {
    u.age++
}
let user: UserObjType;
beforeEach(() => {
    user = {
        name: 'Alex',
        age: 31,
        address: {
            title: 'Minsk'
        }
    }
})
test.skip('obj test 2', () => {
    const addr = user.address
    const user2: UserObjType = {
        name: 'Petya', age: 20, address: addr
    }
    user2.address.title = 'Grodno'
    expect(user.name).toBe('Alex')
    expect(user.address.title).toBe('Grodno')
    expect(user2.name).toBe('Petya')
    expect(user2.address.title).toBe('Grodno')
    expect(user.address).toEqual(user2.address)

})
test.skip('obj test', () => {
    let newUser = user
    increaceAge(newUser)
    expect(user.age).toBe(32)
    expect(newUser.age).toBe(32)
})

test.skip('arr test', () => {
    const userArr: UserType[] = [
        { name: 'Alex', age: 31 },
        { name: 'Egor', age: 15 }
    ]
    const newUserArr = userArr
    userArr.push({ name: 'Vasya', age: 45 })
    expect(userArr[2].name).toBe('Vasya')
    expect(userArr.length).toBe(3)
    expect(newUserArr[2].name).toBe('Vasya')
    expect(newUserArr.length).toBe(3)
    expect(userArr[2]).toEqual({ name: 'Vasya', age: 45 })
})
test.skip('value test', () => {
    let userCount = 100
    let adminCount = userCount
    adminCount++
    expect(userCount).toBe(100)
    expect(adminCount).toBe(101)
})
test.skip('arr test 2', () => {
    const address = {
        title: 'Minsk'
    }
    const userForArr1 = {
        name: 'Alex',
        age: 31,
        address: address
    }
    const userForArr2 = {
        name: 'Alex',
        age: 31,
        address: address
    }
    const usersArr = [userForArr1, userForArr2, { name: 'Jora', age: 25, address: address }]
    expect(userForArr1.address.title).toBe('Minsk')
    expect(userForArr2.address.title).toBe('Minsk')
    expect(usersArr[2].address.title).toBe('Minsk')
    address.title = 'Vitebsk'
    expect(userForArr1.address.title).toBe('Vitebsk')
    expect(userForArr2.address.title).toBe('Vitebsk')
    expect(usersArr[2].address.title).toBe('Vitebsk')
    usersArr[0].address.title = 'Meksika'
    expect(userForArr1.address.title).toBe('Meksika')
    expect(userForArr2.address.title).toBe('Meksika')
    expect(usersArr[2].address.title).toBe('Meksika')
    expect(address.title).toBe('Meksika')
    const superUsers = [userForArr2, usersArr[2]]
    superUsers[1].address.title = 'Gomel'
    expect(userForArr1.address.title).toBe('Gomel')
    expect(userForArr2.address.title).toBe('Gomel')
    expect(usersArr[2].address.title).toBe('Gomel')
    expect(superUsers[0].address.title).toBe('Gomel')
    expect(superUsers[1].address.title).toBe('Gomel')

})