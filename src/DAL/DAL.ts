
export const getData = async () =>{
    const booksResp = await fetch('https://anapioficeandfire.com/api/books/')
    const books = await booksResp.json()
    const charactersResp = await fetch('https://anapioficeandfire.com/api/characters/')
    const characters = await charactersResp.json()
    const housesResp = await fetch('https://anapioficeandfire.com/api/houses/')
    const houses = await housesResp.json()
    return {books: books,characters: characters, houses: houses}
}