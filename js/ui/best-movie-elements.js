import { getBestMovie, getBestMovieSummary } from "../api/best-movie.js"

function displayBestMovieTitle(bestMovie) {
    let bestMovieTitle = document.createElement("h3")
    bestMovieTitle.innerText = bestMovie.title
    let bestMovieDetails = document.querySelector(".best-movie-details")
    bestMovieDetails.insertBefore(bestMovieTitle, bestMovieDetails.firstChild)
}

async function displayBestMovieSummary(bestMovie) {
    let bestMovieSummary = document.createElement("p")
    bestMovieSummary.innerText = await getBestMovieSummary(bestMovie)
    let bestMovieDetails = document.querySelector(".best-movie-details")
    bestMovieDetails.querySelector("button").insertAdjacentElement("beforebegin", bestMovieSummary)
}

function displayBestMovieImage(bestMovie) {
    let bestMovieImage = document.createElement("img")
    bestMovieImage.setAttribute("src", bestMovie.image_url)
    bestMovieImage.setAttribute("alt", "Affiche du film " + bestMovie.title)
    bestMovieImage.setAttribute("title", bestMovie.title)
    let bestMovieBox = document.querySelector(".best-movie-box")
    bestMovieBox.insertBefore(bestMovieImage, bestMovieBox.firstChild)
}

export async function displayBestMovie() {
    let bestMovie = await getBestMovie()

    displayBestMovieTitle(bestMovie)
    displayBestMovieSummary(bestMovie)
    /* displayBestMovieImage(bestMovie) 
    Do not add this function as long as error 404 still there*/
}
