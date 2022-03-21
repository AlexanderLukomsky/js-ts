type AddressType = {
    street: StreetType
}
type StreetType = {
    title: string
}
export type ManType = {
    name: string
    age: number
    lessons: { title: string }[]
    address: AddressType
}
let man: ManType;
beforeEach(() => {
    man = {
        name: 'Alex',
        age: 32,
        lessons: [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }],
        address: {
            street: {
                title: 'Minsk'
            }
        }
    }
})
test.skip('', () => {
    const { name, age, address: { street: { title } } } = man
    expect(name).toBe('Alex')
    expect(age).toBe(32)
    expect(title).toBe('Minsk')
})
test.skip('', () => {
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]
    const [l3, l4] = man.lessons
    const [l5, ...l6] = man.lessons
    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')
    expect(l3.title).toBe('1')
    expect(l4.title).toBe('2')
    expect(l5.title).toBe('1')
    expect(l6.length).toBe(3)
})