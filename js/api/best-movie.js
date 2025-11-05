const bestMovieDataUrl = "http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score"


export async function getBestMovie() {
    let response = await fetch(bestMovieDataUrl)

    if (response.ok) {
        let bestMovieData = await response.json()
        return bestMovieData.results[0]
    } else {
        alert("HTTP-Error: " + response.status)
    }
}