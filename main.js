function loadData(link) {
    return fetch(link)
        .then(data => {
            if (data.status != 422) {
                return data.json();
            }

        })
        .then(data => {
            showMovie(data)

        })
        .catch(err => {
            return false;
        })

};



const inputSearch = document.querySelector('#movie-title');
inputSearch.addEventListener('keydown', searchMovies);

function searchMovies(inputText) {
    inputText = this.value;
    return loadData(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${inputText}&language=en-US&api_key=befd52f7b0c240c468de9e35dbcfafa7`);
}
let imageSrc;

function showMovie(data) {
    const movieContainer = document.querySelector('.movies-container');
    movieContainer.innerHTML = '';
    data.results.forEach(el => {
        if (data != undefined) {
            if (el.poster_path != null) {
                imageSrc = ''.concat('https://image.tmdb.org/t/p/w600_and_h900_bestv2', el["poster_path"]);
                movieContainer.innerHTML += `<div class="movie"><img class="movie-image" src="${imageSrc}"><h1 class="movie-header">${el.title}</h1><h3 class="movie-date">${el["release_date"]}</h3><p class="movie-description">${el.overview}</p></div>`
            }
        }

    })
}
loadData("https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=avenger&language=en-US&api_key=befd52f7b0c240c468de9e35dbcfafa7");
