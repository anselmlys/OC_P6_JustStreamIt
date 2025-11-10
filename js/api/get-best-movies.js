export async function getSixBestMovies(genre) {
    const thrillerBestMoviesURL = "http://127.0.0.1:8000/api/v1/titles/?genre="+genre+"&sort_by=-imdb_score&page_size=6"
    let response = await fetch(thrillerBestMoviesURL)

    if (response.ok) {
        let bestMoviesData = await response.json()
        let movieList = []
        for (let i = 0;  i < 6; i++) {
            movieList.push(bestMoviesData.results[i])
        }
        return movieList
    } else {
        alert("HTTP-Error: " + response.status)
    }
}