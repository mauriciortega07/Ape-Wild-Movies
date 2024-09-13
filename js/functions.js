//Creacion de Elementos para el DOM
const createShowContainerItem = (item) => {
    //console.log(item)
    const containerItem = document.createElement("div");
    containerItem.classList.add("freeShows__container--item");

    const showsCover = document.createElement("img");
    showsCover.classList.add("itemCover");
    showsCover.src = item.image.original;
    showsCover.alt = item.name;

    const infoShow = document.createElement("div");
    infoShow.classList.add("infoShow");

    const infoShowName = document.createElement("h2");
    infoShowName.classList.add("infoShow__name");
    infoShowName.textContent = item.name;

    const infoShowGenre = document.createElement("div");
    infoShowGenre.classList.add("infoShow__genre");

    item.genres.forEach(genre => {
        //console.log(genre);
        const genreText = document.createElement("p");
        genreText.classList.add("infoShow__genre");
        genreText.textContent = genre;
        infoShowGenre.appendChild(genreText);
    });


    const infoShowSummary = document.createElement("p");
    infoShowSummary.classList.add("infoShow__summary");
    const summaryShow = item.summary

    const truncate = (summaryReduce, maxlenght) => {
        if (summaryReduce.length > maxlenght) {
            let reduceSummary = summaryReduce.slice(0, maxlenght - 1)
            return (`${reduceSummary} ...`);
        }
    }

    infoShowSummary.innerHTML = truncate(summaryShow, 100);

    const playContainer = document.createElement("div");
    const playIcon = document.createElement("i");
    const playImage = document.createElement("img");
    

    containerItem.appendChild(showsCover);
    infoShow.appendChild(infoShowName);
    infoShow.appendChild(infoShowGenre);
    infoShow.appendChild(infoShowSummary);
    containerItem.appendChild(infoShow);

    return containerItem;
};

const createMoviesContainerItem = (itemMovies) => {
    const containerItem = document.createElement("div");
    containerItem.classList.add("freeShows__container--item");

    const moviesCover = document.createElement("img");
    moviesCover.classList.add("itemCover");
    let urlImagePath = itemMovies.poster_path;
    const urlComplement = itemMovies.urlComplement
    //const urlBase = 'http://image.tmdb.org/t/p/original';
    moviesCover.src = urlComplement + urlImagePath;
    moviesCover.alt = itemMovies.title;

    containerItem.appendChild(moviesCover);

    return containerItem;
};

//FUNCIONES ASYNC/AWAIT CON AXIOS
const loadShows = async () => {
    const showsGrid = document.querySelector(".freeShows__container");
    try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        //console.log(response);
        const shows = response.data;
        shows.length = 10;
        //console.log(shows);

        showsGrid.innerHTML = '';

        for (const item of shows) {
            //console.log(item);
            //console.log(item)
            const detailsResponse = await axios.get(item._links.self.href);
            //console.log(detailsResponse);
            const showCard = createShowContainerItem(detailsResponse.data);
            showsGrid.appendChild(showCard);
        }

    } catch (error) {
        console.log(`${error}`);
    }
}

document.addEventListener("DOMContentLoaded", loadShows);

//FUNCIONES PROMISES CON AXIOS
const loadConfiguration = () => {
    return new Promise((resolve, reject) => {
        const response = axios.get('https://api.themoviedb.org/3/configuration?api_key=9ccb1e5ad211eb690aa7441e5b39bef2');
        resolve(response);
        reject("error al obtener la ruta de las portadas");
    });
} //Esta funcion regresa una promesa 

const loadTopMovies = () => {
    return new Promise((resolve, reject) => {
        const response = axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9ccb1e5ad211eb690aa7441e5b39bef2');
        resolve(response);
        reject("error al cargar las portadas");
    });
}

//EJECUCION DE LAS PROMESAS
loadTopMovies()
    .then(result => {
        const moviesArray = result.data.results;
        //console.log(moviesArray);
        const moviesGrid = document.querySelector(".freeMovies__container");
        for (const itemMovies of moviesArray) {
            loadConfiguration()
                .then(result => {
                    const urlBase = result.data.images.base_url
                    const sizeImage = result.data.images.poster_sizes[6];
                    const urlComplement = `${urlBase}${sizeImage}`;
                    //console.log(urlComplement);
                    itemMovies.urlComplement = urlComplement;
                    //console.log(itemMovies);
                    const movieCard = createMoviesContainerItem(itemMovies);
                    const showsGrid = document.querySelector(".freeShows__container");
                    showsGrid.innerHTML = '';
                    moviesGrid.appendChild(movieCard);
                })
                .catch(error => console.error(error));
        }
    })
    .catch(error => console.error(error));



