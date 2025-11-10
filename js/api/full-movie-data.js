export async function getMovieData(movie) {
    let response = await fetch(movie.url)

    if (response.ok) {
        let movieData = await response.json()
        return movieData
    } else {
        alert("HTTP-Error: " + response.status)
    }
}
