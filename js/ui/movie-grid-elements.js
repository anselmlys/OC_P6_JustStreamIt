import { getSixBestMovies } from "../api/get-best-movies.js"
import { getMovieData } from "../api/full-movie-data.js"
import { addMovieModal } from "../ui/movie-details-modal.js"


const movieCellTemplate = (() => {
    let template = document.createElement("template")
    template.innerHTML = `
    <div class="movie-grid-cell">
        <img class="grid-image" src="https://picsum.photos/550/750"/>
        <div class="movie-grid-cell-details">
            <h4></h4>
            <div class="grid-movie-details">
                <a class="movie-details-button">Détails</a>
                <div id="modal-movie-details" class="modal">
                </div>
            </div>
        </div>
    </div>`
    return template
})()

function createMovieCell(movieData, section) {
    let genreSection = document.getElementById(section)
    let movieGrid = genreSection.querySelector(".movie-grid")
    let cellTemplate = movieCellTemplate.content.cloneNode(true)
    cellTemplate.querySelector("h4").innerText = movieData.title
    cellTemplate.querySelector("a").setAttribute("href", `#modal-movie-details-${movieData.id}`)
    cellTemplate.querySelector("#modal-movie-details").setAttribute("id", `modal-movie-details-${movieData.id}`)
    addMovieModal(cellTemplate, movieData)
    movieGrid.append(cellTemplate)
}

export async function displayMovieGrid(section, genre) {
    let movieList = await getSixBestMovies(genre)
    for (let movie of movieList) {
        let movieData = await getMovieData(movie)
        createMovieCell(movieData, section)
    }
}

export function removeMovieGrid(section) {
    let genreSection = document.getElementById(section)
    let movieGrid = genreSection.querySelector(".movie-grid")
    let grids = movieGrid.querySelectorAll(".movie-grid-cell")
    grids.forEach(grid => grid.remove())
}