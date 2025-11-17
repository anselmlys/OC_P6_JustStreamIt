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

    let movieImage = bestMovieBox.querySelector("img")
    movieImage.setAttribute("src", movieData.image_url)
    movieImage.setAttribute(
        "onerror", 
        "this.onerror=null; this.src='../image/no-image.png'; this.alt='Image indisponible'; this.title='Image indisponible'")
    movieImage.setAttribute("alt", "Affiche du film " + movieData.title)
    movieImage.setAttribute("title", movieData.title)
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
