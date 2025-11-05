import { getBestMovie } from "../js/api/best-movie.js"

async function displayBestMovie() {
    let bestMovie = await getBestMovie()

    let bestMovieTitle = document.createElement("h3")
    bestMovieTitle.innerText = bestMovie.title
    let bestMovieDetails = document.querySelector(".best-movie-details")
    bestMovieDetails.insertBefore(bestMovieTitle, bestMovieDetails.firstChild)
}

displayBestMovie()