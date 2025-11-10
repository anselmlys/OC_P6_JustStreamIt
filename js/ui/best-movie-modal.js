import { getBestMovie, getMovieData } from "../api/best-movie.js"


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
        <a href="#" class="mobile-modal-close">❌</a>
        <a href="#" class="desktop-modal-close">Fermer</a>
    </div>`
    return template
})()

function createModalContent(movie) {
    let modalSection = document.querySelector(".modal")
    let modalContent = movieModalTemplate.content.cloneNode(true)

    modalContent.querySelector("h3").innerText = movie.title

    let income
    if (movie.worldwide_gross_income === null) {
        income = "Unknown"
    } else {
        income = `$${movie.worldwide_gross_income}`
    }
    modalContent.querySelector("h5").innerText = `${movie.year} - ${movie.genres.join(", ")}
    ${movie.rated} - ${movie.duration} minutes (${movie.countries.join(", ")})
    IMDb score: ${movie.imdb_score}/10
    Recettes au box-office: ${income}`

    modalContent.querySelector(".directors-section").innerHTML = `<b>Réalisé par:</b><br>
    ${movie.directors.join(", ")}`

    modalContent.querySelector(".summary-section").innerText = movie.long_description

    modalContent.querySelector("img").setAttribute("src", "https://picsum.photos/550/750")

    modalContent.querySelector(".actors-section").innerHTML = `<b>Avec:</b><br>
    ${movie.actors.join(", ")}`

    modalSection.append(modalContent)
}

export async function displayBestMovieModal() {
    let bestMovie = await getBestMovie()
    let movieData = await getMovieData(bestMovie)

    createModalContent(movieData)
}