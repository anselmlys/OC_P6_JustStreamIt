export async function getBestMovie() {
    const bestMovieDataUrl = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score"
    let response = await fetch(bestMovieDataUrl)

    if (response.ok) {
        let bestMovieData = await response.json()
        let bestMovie = bestMovieData.results[0]
        return bestMovie
    } else {
        alert("HTTP-Error: " + response.status)
    }
}
