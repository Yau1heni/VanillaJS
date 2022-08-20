const API_KEY = '4d4720a3-f248-4b63-8078-9a6a932e897f'
const API_URL_POPULAR =
    'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'

getMovies(API_URL_POPULAR)

function getClassByRate(rating) {
    if (rating >= 7) return "green"
    else if (rating > 5) return "orange"
    else return "red"
}

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
        },
    })
    const respData = await resp.json()
    showMovies(respData)
}

function showMovies(data) {
    const moviesEl = document.querySelector('.movies')

    data.films.forEach(movie => {
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <div class="movie__cover-inner">
                <img src="${movie.posterUrlPreview}" alt="img" class="movie__cover"/>
            </div>
            <div class="movie__info">
                <div class="movie__title">${movie.nameRu}</div>
                <div class="movie__category">${movie.genres.map(e => ` ${e.genre}`)}</div>
                <div class="movie__average movie__average--${getClassByRate(movie.rating)}">${movie.rating}</div>
            </div>
`;
        moviesEl.appendChild(movieEl)
    });
}