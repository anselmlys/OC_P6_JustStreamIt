async function getBestMovie() {
    const bestMovieDataUrl = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score"
    let response = await fetch(bestMovieDataUrl)

    if (response.ok) {
        let bestMovieData = await response.json()
        return bestMovieData.results[0]
    } else {
        alert("HTTP-Error: " + response.status)
    }
}


async function getMovieData(bestMovie) {
    let response = await fetch(bestMovie.url)

    if (response.ok) {
        let movieData = await response.json()
        return movieData
    } else {
        alert("HTTP-Error: " + response.status)
    }
}


export { getBestMovie, getMovieData }