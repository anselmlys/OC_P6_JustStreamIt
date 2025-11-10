import { getGenres } from "../api/get-genres.js"


function createDropdownOption(section, genre) {
    let currentSection = document.getElementById(section)
    let dropdownSection = currentSection.querySelector("select")
    let option = document.createElement("option")
    option.setAttribute("value", genre)
    option.innerText = genre
    dropdownSection.append(option)
}

export async function displayDropdownOptions(section) {
    let genresList = await getGenres()
    for (let genre of genresList) {
        createDropdownOption(section, genre.name)
    }
}
