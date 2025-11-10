export async function getGenres() {
    const genresURL = "http://localhost:8000/api/v1/genres/?page_size=30"
    let response = await fetch(genresURL)

    if (response.ok) {
        let genresData = await response.json()
        let genresList = []
        for (let genre of genresData.results) {
            genresList.push(genre)
        }
        return genresList
    } else {
        alert("HTTP-Error: " + response.status)
    }
}