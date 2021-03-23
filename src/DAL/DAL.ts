
export const getData = async () =>{
    const booksResp = await fetch('https://anapioficeandfire.com/api/books/')
    const books = await booksResp.json()
    const charactersResp = await fetch('https://anapioficeandfire.com/api/characters/')
    const characters = await charactersResp.json()
    const housesResp = await fetch('https://anapioficeandfire.com/api/houses/')
    const houses = await housesResp.json()
    return {books: books,characters: characters, houses: houses}
}

export const getItem = async (url: string) =>{
    const itemResp = await fetch(url)
    const item = await itemResp.json()
    return item
}

export const getMore = async (page: any, name: string) =>{
    const itemResp = await fetch(`https://anapioficeandfire.com/api/${name}?page=${page}&pageSize=10`)
    const item = await itemResp.json()
    return item
}