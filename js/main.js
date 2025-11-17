import { displayBestMovieBox } from "../js/ui/best-movie-elements.js"
import { displayMovieGrid } from "../js/ui/movie-grid-elements.js"
import { displayDropdownOptions } from "../js/ui/genres-drop-down-menu.js" 


function displayMovieData() {
    displayBestMovieBox()
    displayMovieGrid("best-movies", null)
    displayMovieGrid("thriller", "thriller")
    displayMovieGrid("sci-fi", "sci-fi")
    displayMovieGrid("other", "action")

    document.addEventListener('DOMContentLoaded', () => {
        displayDropdownOptions("other")
    })
}

displayMovieData()