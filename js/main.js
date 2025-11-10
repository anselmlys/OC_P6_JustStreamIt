import { displayBestMovie } from "../js/ui/best-movie-elements.js"
import { displayBestMovieModal } from "../js/ui/best-movie-modal.js"
import { displayMovieGrid } from "../js/ui/movie-grid-elements.js"
import { displayDropdownOptions } from "../js/ui/genres-drop-down-menu.js" 


function displayMovieData() {
    displayBestMovie()
    displayBestMovieModal()
    displayMovieGrid("thriller")
    displayMovieGrid("sci-fi")
    displayDropdownOptions("autres-1")
    displayDropdownOptions("autres-2")
}

displayMovieData()