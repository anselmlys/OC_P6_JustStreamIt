import { getBestMovie } from "../api/get-best-movie.js"
import { getSixBestMovies } from "../api/get-best-movies.js"
import { getMovieData } from "../api/full-movie-data.js"


const movieModalTemplate = (() => {
    let template = document.createElement("template")
    template.innerHTML = `
    <div class="modal-content">
        <h3></h3>
        <h5></h5>
        <p class="directors-section"></p>
        <p class="summary-section"></p>
        <img/>
        <p class="actors-section"></p>
        <a href="#!" class="mobile-modal-close">❌</a>
        <a href="#!" class="desktop-modal-close">Fermer</a>
    </div>`
    return template
})()

function createModalContent(movie) {
    let modalContent = movieModalTemplate.content.cloneNode(true)

    modalContent.querySelector("h3").innerText = movie.title

    let income
    if (movie.worldwide_gross_income === null) {
        income = "Unknown"
    } else if (movie.worldwide_gross_income / 1000000 >= 1) {
        let modifiedIncome = movie.worldwide_gross_income / 1000000
        modifiedIncome = Math.round(modifiedIncome * 10) / 10
        income = `$${modifiedIncome}M`
    } else if (movie.worldwide_gross_income / 1000 >= 1) {
        let modifiedIncome = movie.worldwide_gross_income / 1000
        modifiedIncome = Math.round(modifiedIncome * 10) / 10
        income = `$${modifiedIncome}k`
    } else {
        income = `$${movie.worldwide_gross_income}`
    }

    let rating 
    if (movie.rated === "Not rated or unkown rating") {
        rating = "Not rated or unkown rating"
    } else {
        rating = `Rated: ${movie.rated}`
    }

    modalContent.querySelector("h5").innerText = `${movie.year} - ${movie.genres.join(", ")}
    ${rating} - ${movie.duration} minutes (${movie.countries.join(", ")})
    IMDb score: ${movie.imdb_score}/10
    Recettes au box-office: ${income}`

    modalContent.querySelector(".directors-section").innerHTML = `<b>Réalisé par:</b><br>
    ${movie.directors.join(", ")}`

    modalContent.querySelector(".summary-section").innerText = movie.long_description

    modalContent.querySelector("img").setAttribute("src", "https://picsum.photos/550/750")

    modalContent.querySelector(".actors-section").innerHTML = `<b>Avec:</b><br>
    ${movie.actors.join(", ")}`

    return modalContent
}

export function addMovieModal(movieSection, movieData) {
    let modalSection = movieSection.querySelector(".modal")
    let modalContent = createModalContent(movieData)
    modalSection.append(modalContent)
}