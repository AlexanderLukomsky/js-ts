import { addBooks, companyTipe, increaseAge, moveUserWithLaptop, removeBook, updateBooks, updateCompanyTitle, updateTitleForCompany, upgradeUserLaptop, userType, userWithBooksType, UserWithCompanyType, userWithLaptopType } from "./10immutability";

let user: userType;
beforeEach(() => {
    user = {
        name: 'Alex',
        age: 30,
        address: {
            title: 'Minsk'
        }
    }
})
test.skip('increase age', () => {
    user = increaseAge(user, 2)
    const newUser = increaseAge(user, 2)
    expect(user.age).toBe(32)
    expect(newUser.age).toBe(34)
})
test.skip('move user with laptop', () => {
    let userWithLaptop: userWithLaptopType = {
        name: 'Alex',
        age: 30,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Lenovo'
        }
    }
    const newUser = moveUserWithLaptop(userWithLaptop, 'USA')
    expect(userWithLaptop).not.toBe(newUser)
    expect(userWithLaptop.address).not.toBe(newUser.address)
    expect(userWithLaptop.laptop).toBe(newUser.laptop)
    expect(userWithLaptop.address.title).toBe('Minsk')
    expect(newUser.address.title).toBe('USA')
})
test.skip('upgrade user laptop to Lenovo Legion', () => {
    let userWithLaptop: userWithLaptopType = {
        name: 'Alex',
        age: 30,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Lenovo'
        }
    }
    const newUser = upgradeUserLaptop(userWithLaptop, 'Lenovo Legion')
    expect(userWithLaptop).not.toBe(newUser)
    expect(userWithLaptop.address).toBe(newUser.address)
    expect(userWithLaptop.laptop).not.toBe(newUser.laptop)
    expect(userWithLaptop.laptop.title).toBe('Lenovo')
    expect(newUser.laptop.title).toBe('Lenovo Legion')
})

test.skip('add new books for user', () => {
    let userWithBooks: userWithLaptopType & userWithBooksType = {
        name: 'Alex',
        age: 30,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Lenovo'
        },
        books: [
            'css', 'html', 'js', 'phyton'
        ]
    }
    const newUser = addBooks(userWithBooks, ['react', 'typescript'])
    expect(userWithBooks).not.toBe(newUser)
    expect(userWithBooks.address).toBe(newUser.address)
    expect(userWithBooks.laptop).toBe(newUser.laptop)
    expect(userWithBooks.books).not.toBe(newUser.books)
    expect(newUser.books[0]).toBe('react')
    expect(newUser.books[1]).toBe('typescript')
    expect(userWithBooks.books[0]).toBe('css')
    expect(userWithBooks.books.length).toBe(4)
    expect(newUser.books.length).toBe(6)
})
test.skip('update css to scss', () => {
    let userWithBooks: userWithLaptopType & userWithBooksType = {
        name: 'Alex',
        age: 30,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Lenovo'
        },
        books: [
            'html', 'js', 'css', 'phyton'
        ]
    }
    const newUser = updateBooks(userWithBooks, 'SCSS')
    expect(userWithBooks).not.toBe(newUser)
    expect(userWithBooks.address).toBe(newUser.address)
    expect(userWithBooks.laptop).toBe(newUser.laptop)
    expect(userWithBooks.books).not.toBe(newUser.books)
    expect(newUser.books[2]).toBe('SCSS')
    expect(userWithBooks.books[2]).toBe('css')
    expect(userWithBooks.books.length).toBe(4)
    expect(newUser.books.length).toBe(4)
})
test.skip('remove book', () => {
    let userWithBooks: userWithLaptopType & userWithBooksType = {
        name: 'Alex',
        age: 30,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Lenovo'
        },
        books: [
            'html', 'js', 'css', 'phyton'
        ]
    }
    const newUser = removeBook(userWithBooks, 'phyton')
    expect(userWithBooks).not.toBe(newUser)
    expect(userWithBooks.address).toBe(newUser.address)
    expect(userWithBooks.laptop).toBe(newUser.laptop)
    expect(userWithBooks.books).not.toBe(newUser.books)
    expect(userWithBooks.books.length).toBe(4)
    expect(newUser.books.length).toBe(3)
})

test.skip('update company', () => {
    let userWithCompany: UserWithCompanyType = {
        name: 'Alex',
        age: 30,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Lenovo'
        },
        books: [
            'html', 'js', 'css', 'phyton'
        ],
        companies: [
            { title: 'Epam', id: 2 },
            { title: 'Гугле', id: 1 },
        ]
    }
    const newUser = updateCompanyTitle(userWithCompany, 1, 'Google')
    expect(userWithCompany).not.toBe(newUser)
    expect(userWithCompany.address).toBe(newUser.address)
    expect(userWithCompany.laptop).toBe(newUser.laptop)
    expect(userWithCompany.books).toBe(newUser.books)

    expect(userWithCompany.companies).not.toBe(newUser.companies)
    expect(userWithCompany.companies[1].title).toBe('Гугле')
    expect(newUser.companies[1].title).toBe('Google')
    expect(newUser.companies.length).toBe(2)
})
test.skip('update company', () => {

    const companies: companyTipe = {
        "Alex": [{ title: 'Epam', id: 2 }, { title: 'Google', id: 1 }],
        "Egor": [{ title: 'Yandex', id: 1 }]
    }
    const companiesCopy = updateTitleForCompany(companies, 'Alex', 2, 'Yandex')
    expect(companiesCopy).not.toStrictEqual(companies)
    expect(companiesCopy).not.toBe(companies)
    expect(companies["Alex"][0].title).toBe('Epam')
    expect(companiesCopy["Alex"][0].title).toBe('Yandex')
})