export const usersObj = {
    '0': 'Alex',
    '1': 'Dima',
    '2': 'Egor',
    '3': 'Roma'
}
export type UsersType = {
    [key: string]: { id: number, name: string }
}
export let users: UsersType = {
    '111231': { id: 111231, name: 'Alex' },
    '22123': { id: 22123, name: 'Dima' },
    '301232': { id: 301232, name: 'Egor' },
    '4222': { id: 4222, name: 'Roma' }
}
export const usersArray = [
    { id: 111231, name: 'Alex' }, { id: 22123, name: 'Dima' }, { id: 301232, name: 'Egor' }, { id: 4222, name: 'Roma' }
]

export const newUsers: UsersType = {
    [usersArray[0].id]: usersArray[0],
    [usersArray[1].id]: usersArray[1],
    [usersArray[2].id]: usersArray[2],
    [usersArray[3].id]: usersArray[3]
}