import { getBestMovie } from "../js/api/best-movie.js"
import { displayBestMovieTitle, displayBestMovieSummary, displayBestMovieImage } from "../js/ui/best-movie-elements.js"

async function displayBestMovie() {
    let bestMovie = await getBestMovie()

    displayBestMovieTitle(bestMovie)
    displayBestMovieSummary(bestMovie)
    displayBestMovieImage(bestMovie)
}

displayBestMovie()