import { checkedHousesMustBeOverThree, CityType } from "./obj"

let country: CityType
beforeEach(() => {
    country = {
        title: 'Minsk',
        houses: [{
            buildedAT: 1992,
            address: {
                city: 'Minsk',
                number: 111
            }
        }, {
            buildedAT: 1990,
            address: {
                city: 'Gomel',
                number: 3
            }
        }, {
            buildedAT: 1996,
            address: {
                city: 'Brest',
                number: 8
            }
        }, {
            buildedAT: 1991,
            address: {
                city: 'Grodno',
                number: 6
            }
        }],
        govermentBuildings: ['copstaion', 'hospital', 'firestation', 'copstaion', 'firestation', 'hospital'],
        citizenNumber: 2000000,
    }

})
test.skip('city should get more than 3 houses', () => {
    expect(country.houses.length).toBe(4)
})
test.skip('city should get hospital and firestation', () => {
    expect(checkedHousesMustBeOverThree(country.houses)).toBe(true)
})