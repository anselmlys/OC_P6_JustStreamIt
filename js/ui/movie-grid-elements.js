import { getSixBestMovies } from "../api/movie-grid.js"


const movieCellTemplate = (() => {
    let template = document.createElement("template")
    template.innerHTML = `
    <div class="movie-grid-cell">
        <img src="https://picsum.photos/500/700"/>
        <div class="movie-grid-cell-details">
            <h4></h4>
            <button>Détails</button>
        </div>
    </div>`
    return template
})()

function createMovieCell(movie, genre) {
    let genreSection = document.getElementById(genre)
    let movieGrid = genreSection.querySelector(".movie-grid")
    let cellTemplate = movieCellTemplate.content.cloneNode(true)
    cellTemplate.querySelector("h4").innerText = movie.title
    movieGrid.append(cellTemplate)
}

export async function displayMovieGrid(genre) {
    let movieList = await getSixBestMovies(genre)
    for (let movie of movieList) {
        createMovieCell(movie, genre)
    }
}