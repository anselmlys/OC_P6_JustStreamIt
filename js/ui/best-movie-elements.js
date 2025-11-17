import { getBestMovie } from "../api/get-best-movie.js"
import { getMovieData } from "../api/full-movie-data.js"
import { addMovieModal } from "../ui/movie-details-modal.js"


const bestMovieBoxTemplate = (() => {
    let template = document.createElement("template")
    template.innerHTML = `
    <div class="best-movie-box">
        <img class="best-movie-image">
        <div class="best-movie-details">
            <h3></h3>
            <p></p>
            <a href="#modal-movie-details" class="movie-details-button">Détails</a>
            <div id="modal-movie-details" class="modal">
            </div>
        </div>
    </div>`
    return template
})()

function createBestMovieBox(movieData) {
    let bestMovieBox = bestMovieBoxTemplate.content.cloneNode(true)

    bestMovieBox.querySelector("h3").innerText = movieData.title
    bestMovieBox.querySelector("p").innerText = movieData.description
    bestMovieBox.querySelector("img").setAttribute("src", "https://picsum.photos/550/750")
    bestMovieBox.querySelector("img").setAttribute("alt", "Affiche du film " + movieData.title)
    bestMovieBox.querySelector("img").setAttribute("title", movieData.title)
    addMovieModal(bestMovieBox, movieData)

    return bestMovieBox
}

export async function displayBestMovieBox() {
    let bestMovie = await getBestMovie()
    let movieData = await getMovieData(bestMovie)

    let bestMovieBox = createBestMovieBox(movieData)
    let bestMovieSection = document.getElementById("best-movie")
    bestMovieSection.append(bestMovieBox)
}
