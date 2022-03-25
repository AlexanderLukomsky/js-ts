
export type userType = {
    name: string,
    age: number,
    address: {
        title: string
    }
}
export type UserWithCompanyType = userWithBooksType & userWithLaptopType & {
    companies: {
        title: string
        id: number
    }[]
}
export type companyTipe = {
    [key: string]: { title: string, id: number }[]
}
export type userWithLaptopType = userType & { laptop: { title: string } }
export type userWithBooksType = userType & { books: string[] }
export const increaseAge = (u: userType, count: number) => ({ ...u, age: u.age + count })

export const moveUserWithLaptop = (u: userWithLaptopType, city: string) => ({ ...u, address: { ...u.address, title: city } })
export const upgradeUserLaptop = (u: userWithLaptopType, laptopTitle: string) => (
    {
        ...u,
        laptop: { ...u.laptop, title: laptopTitle }
    }
)
export const addBooks = (u: userWithBooksType & userWithLaptopType, books: string[]) => (
    {
        ...u, books: [...books, ...u.books]
    }
)
export const updateBooks = (u: userWithBooksType & userWithLaptopType, book: string) => (
    {
        ...u, books: u.books.map(el => el === 'css' ? el = book : el)
    }
)
export const removeBook = (u: userWithBooksType & userWithLaptopType, book: string) => (
    {
        ...u, books: u.books.filter(el => el !== book)
    }
)

export const updateCompanyTitle = (u: UserWithCompanyType, id: number, title: string) => (
    {
        ...u,
        companies: u.companies.map(el => el.id === id ? { ...el, title } : el)
    }
)

export const updateTitleForCompany = (u: companyTipe, idCompany: string, id: number, title: string) => (
    {
        ...u,
        [idCompany]: u[idCompany].map(el => el.id === id ? { ...el, title } : el)
    }
)