export type PeopleType = {
    name: string
    age: number
}
export const people: PeopleType[] = [
    { name: 'Petr Petrov', age: 40 },
    { name: 'Vasya Ivanov', age: 25 },
    { name: 'Dima Egorov', age: 15 }
]
const devTransformator = (man: PeopleType) => ({
    stack: ['css', 'js', 'html', 'react', 'tdd', 'scss'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})
//export const devs2 = people.map((man) => devTransformator(man))
export const devs2 = people.map(man => ({
    stack: ['css', 'js', 'html', 'react', 'tdd', 'scss'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))
