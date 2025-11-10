import { displayBestMovie } from "../js/ui/best-movie-elements.js"
import { displayMovieGrid } from "../js/ui/movie-grid-elements.js"
import { displayDropdownOptions } from "../js/ui/genres-drop-down-menu.js" 


function displayMovieData() {
    displayBestMovie()
    displayMovieGrid("thriller", "thriller")
    displayMovieGrid("sci-fi", "sci-fi")
    displayDropdownOptions("autres-1")
    displayDropdownOptions("autres-2")
}

displayMovieData()