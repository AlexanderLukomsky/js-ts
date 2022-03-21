type studentAdressType = {
    county: string
    city: string
    street: string
}
type studentTechnologiesType = {
    id: number
    title: string
    isDone: boolean
}
export type studentType = {
    id: number
    name: string
    age: number
    gender: string
    isActive: string
    address: studentAdressType
    technologies: studentTechnologiesType[]
}
export const student: studentType = {
    id: 1,
    name: 'Alex',
    age: 32,
    gender: 'male',
    isActive: 'occasionally',
    address: {
        county: 'Belarus',
        city: 'Minsk',
        street: 'Levina'
    },
    technologies: [
        { id: 1, title: 'React', isDone: false },
        { id: 2, title: 'HTML', isDone: true },
        { id: 3, title: 'JS', isDone: true },
        { id: 5, title: 'CSS', isDone: true },
        { id: 5, title: 'SCSS', isDone: true },
    ]
}
///**** */
type AddressType = {
    city: string
    number: number
}
type HousesType = {
    buildedAT: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: HousesType[]
    govermentBuildings: string[]
    citizenNumber: number
}

export const govermentBuildingsSearch = (arr: string[]) => {
    let checked: string[] = []
    for (let i = 0; i < arr.length - 1; i++) {
        debugger
        if (arr[i] === 'hospital' || 'firestation') {
            if (arr[i] === 'hospital' && checked[0] !== 'hospital')
                checked = [...checked, 'hospital']
            if (arr[i] === 'firestation' && checked[0] !== 'firestation')
                checked = [...checked, 'firestation']
        }
        if (checked.length === 2) return checked.length
    }
    return checked.length
}
export const checkedHousesMustBeOverThree = (arr: HousesType[]) => {
    return arr.length > 3 ? true : false
}