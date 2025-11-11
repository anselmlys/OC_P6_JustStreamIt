import { getGenres } from "../api/get-genres.js"
import { displayMovieGrid, removeMovieGrid } from "./movie-grid-elements.js"


function createDropdownOption(dropdownSection, genre) {
    let option = document.createElement("option")
    option.setAttribute("value", genre)
    option.innerText = genre
    dropdownSection.append(option)
}

async function displayDropdownOptions(section) {
    let currentSection = document.getElementById(section)
    let dropdownSection = currentSection.querySelector("select")
    let genresList = await getGenres()
    for (let genre of genresList) {
        createDropdownOption(dropdownSection, genre.name)
    }
    dropdownSection.addEventListener('change', (e) => {
        let selectedGenre = e.target.value
        removeMovieGrid(section)
        displayMovieGrid(section, selectedGenre)
    })
}

function getDropdownSelection(section) {
    let categorySelect = document.getElementById(`${section}-category`)
    let selectedGenre = categorySelect.options[categorySelect.selectedIndex].text
    return selectedGenre
}


export { displayDropdownOptions, getDropdownSelection }