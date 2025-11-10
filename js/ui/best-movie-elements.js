import { getBestMovie } from "../api/get-best-movie.js"
import { getMovieData } from "../api/full-movie-data.js"
import { addMovieModal } from "../ui/movie-details-modal.js"


function displayBestMovieTitle(bestMovie) {
    let bestMovieTitle = document.createElement("h3")
    bestMovieTitle.innerText = bestMovie.title
    let bestMovieDetails = document.querySelector(".best-movie-details")
    bestMovieDetails.insertBefore(bestMovieTitle, bestMovieDetails.firstChild)
}

async function displayBestMovieSummary(bestMovie) {
    let bestMovieSummary = document.createElement("p")
    let movieData = await getMovieData(bestMovie)
    bestMovieSummary.innerText = movieData.description
    let bestMovieDetails = document.querySelector(".best-movie-details")
    bestMovieDetails.querySelector("a").insertAdjacentElement("beforebegin", bestMovieSummary)
}

function displayBestMovieImage(bestMovie) {
    let bestMovieImage = document.createElement("img")
    bestMovieImage.setAttribute("src", bestMovie.image_url)
    bestMovieImage.setAttribute("alt", "Affiche du film " + bestMovie.title)
    bestMovieImage.setAttribute("title", bestMovie.title)
    let bestMovieBox = document.querySelector(".best-movie-box")
    bestMovieBox.insertBefore(bestMovieImage, bestMovieBox.firstChild)
}

async function displayBestMovieModal(section, bestMovie) {
    let movieSection = document.getElementById(section)
    let movieData = await getMovieData(bestMovie)
    addMovieModal(movieSection, movieData)
}

export async function displayBestMovie() {
    let bestMovie = await getBestMovie()

    displayBestMovieTitle(bestMovie)
    displayBestMovieSummary(bestMovie)
    /* displayBestMovieImage(bestMovie) 
    Do not add this function as long as error 404 still there*/
    displayBestMovieModal("best-movie", bestMovie)
}
