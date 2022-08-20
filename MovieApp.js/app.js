const API_KEY = '4d4720a3-f248-4b63-8078-9a6a932e897f'
const API_URL_POPULAR =
    'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'

getMovies(API_URL_POPULAR)

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    })
    const respData = await resp.json()
    console.log(respData)
}