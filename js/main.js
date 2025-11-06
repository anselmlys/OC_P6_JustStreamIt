import { getBestMovie } from "../js/api/best-movie.js"
import { displayBestMovieTitle, displayBestMovieSummary, displayBestMovieImage } from "../js/ui/best-movie-elements.js"
import { displayMovieGrid } from "../js/ui/movie-grid-elements.js" 

async function displayBestMovie() {
    let bestMovie = await getBestMovie()

    displayBestMovieTitle(bestMovie)
    displayBestMovieSummary(bestMovie)
    /* displayBestMovieImage(bestMovie) 
    Do not add this function as long as error 404 still there*/
}

displayBestMovie()
displayMovieGrid("thriller")
displayMovieGrid("sci-fi")