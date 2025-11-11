export async function getSixBestMovies(genre) {
    let bestMoviesURL = ""
    if (genre === null) {
        bestMoviesURL = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score&page_size=10"
    } else {
        bestMoviesURL = "http://127.0.0.1:8000/api/v1/titles/?genre="+genre+"&sort_by=-imdb_score&page_size=10"
    }
    let response = await fetch(bestMoviesURL)

    if (response.ok) {
        let bestMoviesData = await response.json()
        let movieList = []
        for (let i = 0;  i < 7; i++) {
            movieList.push(bestMoviesData.results[i])
        }
        movieList.shift()
        return movieList
    } else {
        alert("HTTP-Error: " + response.status)
    }
}