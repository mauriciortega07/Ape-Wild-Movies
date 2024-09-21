//-----------------------------------------CREACION DE ELEMENTOS DEL DOM----------------------------
//------------------FUNCIONES GENERALES -------------

/*Esta funciona reduce la longitud del resumen de la 
sinopsis de cada show o pelicula*/
const reduceSummary = (summary, maxlenght) => {
    if (summary.length > maxlenght) {
        const summaryReduce = summary.slice(0, maxlenght - 1);
        let summaryFinal = `${summaryReduce}....`
        return summaryFinal
    }

}
/* --------------- FORMULARIOS DE LOGIN - SIGNUP ---- */

//---- crea el formulario de registro

const createLoginForm = () => {
    const fragment = document.createDocumentFragment();

        const sectionContainer = document.createElement("section");
        sectionContainer.classList.add("loginForm");
        fragment.appendChild(sectionContainer);

            const closeContainer = document.createElement("div");
            closeContainer.classList.add("loginForm__close");
            sectionContainer.appendChild(closeContainer);
                const closeIcon = document.createElement("i");
                closeIcon.classList.add("loginForm__close--icon");
                closeContainer.appendChild(closeIcon);
                    const closeContainerImage = document.createElement("img");
                    closeContainerImage.classList.add("closeImage");
                    closeContainerImage.src = "/img/icons/x-circle.svg";
                    closeIcon.appendChild(closeContainerImage);

            const divContainerUser = document.createElement("div");
            divContainerUser.classList.add("loginForm__user");
            sectionContainer.appendChild(divContainerUser);

                const loginTitle = document.createElement("h3");
                loginTitle.classList.add("loginForm__user--title");
                loginTitle.textContent = "Usuario";
                divContainerUser.appendChild(loginTitle);
                

                const loginText = document.createElement("input");
                loginText.classList.add("loginForm__user--text");
                loginText.type = "text";
                loginText.placeholder = "correo o usuario";
                divContainerUser.appendChild(loginText);    

            const divContainerPass = document.createElement("div");
            divContainerPass.classList.add("loginForm__pass");
            sectionContainer.appendChild(divContainerPass);

                const passTitle = document.createElement("h3");
                passTitle.classList.add("loginForm__pass--title");
                passTitle.textContent = "Contraseña";
                divContainerPass.appendChild(passTitle);

                const passContainer = document.createElement("input");
                passContainer.classList.add("loginForm__pass--text");
                passContainer.type = "password";
                passContainer.placeholder = "introduce tu contraseña";
                divContainerPass.appendChild(passContainer);

            const divContainerButtonSend = document.createElement("div");
            divContainerButtonSend.classList.add("loginForm__button");
            sectionContainer.appendChild(divContainerButtonSend);

                const botonSend = document.createElement("input");
                botonSend.classList.add("loginForm__button--send");
                botonSend.type = "button";
                botonSend.value = "Enviar";
                divContainerButtonSend.appendChild(botonSend);
                    
        const headerContainer = document.querySelector("header").appendChild(fragment);
}

createLoginForm();

const loginElement = document.querySelector(".login");
loginElement.addEventListener("click", () => {
    document.querySelector(".loginForm").style.visibility = "visible";
    document.querySelector(".loginForm").style.opacity = "1";
});

const closeElement = document.querySelector(".closeImage");
closeElement.addEventListener("click", () => {
    document.querySelector(".loginForm").style.visibility = "hidden";
    document.querySelector(".loginForm").style.opacity = "0";
})

/*-----------------SECCION DE SHOWS---------------------*/

//crea las tarjetas de info. cada show 
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
    playContainer.classList.add("infoShow__playContainer");

    const playIcon = document.createElement("i");
    playIcon.classList.add("infoShow__playContainer--playIcon")

    const playImage = document.createElement("img");
    playImage.classList.add("playImage");
    playImage.src = "/img/icons/play-circle-grey.svg";

    playContainer.appendChild(playIcon);
    playIcon.appendChild(playImage);

    containerItem.appendChild(showsCover);
    infoShow.appendChild(infoShowName);
    infoShow.appendChild(infoShowGenre);
    infoShow.appendChild(infoShowSummary);
    infoShow.appendChild(playContainer);
    containerItem.appendChild(infoShow);

    return containerItem;
};

/*-----------------SECCION DE PELICULAS -------------------*/

//crea las tarjetas de info. cada pelicula 
const createMoviesContainerItem = (itemMovies) => {
    //console.log(itemMovies);
    const containerItem = document.createElement("div");
    containerItem.classList.add("freeMovies__container--item");

    const moviesCover = document.createElement("img");
    moviesCover.classList.add("itemCover");
    let urlImagePath = itemMovies.poster_path;
    const urlComplement = itemMovies.urlComplement;
    //const urlBase = 'http://image.tmdb.org/t/p/original';
    moviesCover.src = urlComplement + urlImagePath;
    moviesCover.alt = itemMovies.title;

    const infoMovies = document.createElement("div");
    infoMovies.classList.add("infoMovies");

    const infoMoviesName = document.createElement("h2");
    infoMoviesName.classList.add("infoMovies__name");
    infoMoviesName.innerHTML = itemMovies.title;

    const infoMoviesGenre = document.createElement("div");
    infoMoviesGenre.classList.add("infoMovies__genre");
    infoMoviesGenre.textContent = "Drama";

    const infoMoviesSummary = document.createElement("p");
    infoMoviesSummary.classList.add("infoMovies__summary");

    infoMoviesSummary.innerHTML = reduceSummary(itemMovies.overview, 100);

    const infoMoviesPlayContainer = document.createElement("div");
    infoMoviesPlayContainer.classList.add("infoMovies__playContainer");
    const playIcon = document.createElement("i");
    playIcon.classList.add("infoMovies__playContainer--playIcon");
    const playIcon__image = document.createElement("img");
    playIcon__image.classList.add("playImage");
    playIcon__image.src = "/img/icons/play-circle-grey.svg"

    infoMoviesPlayContainer.appendChild(playIcon);
    playIcon.appendChild(playIcon__image);

    infoMovies.appendChild(infoMoviesName);
    infoMovies.appendChild(infoMoviesGenre);
    infoMovies.appendChild(infoMoviesSummary);
    infoMovies.appendChild(infoMoviesPlayContainer);

    containerItem.appendChild(moviesCover);
    containerItem.appendChild(infoMovies);

    return containerItem;
};

/*----------------- RESULTADOS DE LA BUSQUEDA-------------------*/

//crea las tarjetas de info. cada show que arroja la busqueda
const showsResults = (showItem) => {
    //console.log(showItem);

    const showsSearchContainerItem = document.createElement("div");
    showsSearchContainerItem.classList.add("showsResult__container--item");
        
    const showsSearchImg = document.createElement("img");
        showsSearchImg.classList.add("itemCover");
        //console.log(showsSearchImg.src.innerHTML = showItem.image.medium)

        if (showItem.show.image === null) {
            showItem.show.image = "/img/icons/no-photo-icon.png"
            showsSearchImg.src = showItem.show.image;
        } else {
            showsSearchImg.src = showItem.show.image.medium;
            showsSearchImg.alt = showItem.show.name;
            showsSearchContainerItem.appendChild(showsSearchImg);
        }
    
    const infoshowsResult = document.createElement("div");
    infoshowsResult.classList.add("infoshowsResult");

        const infoshowsResultName = document.createElement("h2");
        infoshowsResultName.classList.add("infoshowsResult__name");
        infoshowsResultName.textContent = showItem.show.name;

        const infoshowsResultGenre = document.createElement("div");
        infoshowsResultGenre.classList.add("infoshowsResult__genre");
        console.log(showItem);

            showItem.show.genres.forEach( genre => {
                console.log(genre);
                const genreText = document.createElement("p");
                genreText.classList.add("infoshowsResult__genre");
                genreText.textContent = genre;
                infoshowsResultGenre.appendChild(genreText);
            });

        const infoshowsResultSummary = document.createElement("p");
        infoshowsResultSummary.classList.add("infoshowsResult__summary");
        console.log(showItem.show.summary.length);
        infoshowsResultSummary.innerHTML = reduceSummary(showItem.show.summary, 100);

        const infoshowsResultPlayContainer = document.createElement("div");
        infoshowsResultPlayContainer.classList.add("infoshowsResult__playContainer")
            const infoshowsResultPlayContainerPlayIcon = document.createElement("i");
            infoshowsResultPlayContainerPlayIcon.classList.add("infoshowsResult__playContainer--playIcon");
            infoshowsResultPlayContainer.appendChild(infoshowsResultPlayContainerPlayIcon);
                const playImage = document.createElement("img");
                playImage.classList.add("playImage");
                playImage.src = "/img/icons/play-circle-grey.svg";
                infoshowsResultPlayContainerPlayIcon.appendChild(playImage);

        infoshowsResult.appendChild(infoshowsResultName);
        infoshowsResult.appendChild(infoshowsResultGenre);
        infoshowsResult.appendChild(infoshowsResultSummary);
        infoshowsResult.appendChild(infoshowsResultPlayContainer);

    
    showsSearchContainerItem.appendChild(infoshowsResult);


        return showsSearchContainerItem;

}


//------------------------------------------ FUNCIONES --------------------------------------------

/*---------------------------------FUNCIONES ASYNC/AWAIT CON AXIOS---------------------*/

/*------OBTIENE RESPUESTA DE LA API PARA LA SECCION  DE SHOWS-------*/
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

/*---------------------------------FUNCIONES PROMISES CON AXIOS---------------------*/

/*------OBTIENE RESPUESTA DE LA API PARA ACCEDER A LA CONFIGURTACION DE LA URL BASE DE LAS IMAGENES-------*/

/*Esta funcion regresa una promesa que si es exitosa nos dara 
        el objeto que contiene los datos de configuracion, este endpoint
        es indispensable ya que contiene propiedades que deben ser incluidas para
        la asignacion de src de la img de las peliculas*/


const loadConfiguration = () => {
    return new Promise((resolve, reject) => {
        const response = axios.get('https://api.themoviedb.org/3/configuration?api_key=9ccb1e5ad211eb690aa7441e5b39bef2');
        resolve(response);
        reject("error al obtener la ruta de las portadas");
    });
}

/*------OBTIENE RESPUESTA DE LA API PARA LA SECCION  DE PELICULAS-------*/

/*Esta funcion regresa una promesa que si es exitosa nos dara 
el objeto que contiene los datos de cada pelicula */

const loadTopMovies = () => {
    return new Promise((resolve, reject) => {
        const response = axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9ccb1e5ad211eb690aa7441e5b39bef2');
        resolve(response);
        reject("error al cargar las portadas");
    });
}

/*------OBTIENE RESPUESTA DE LA API PARA BUSCAR SHOWS POR SU NOMBRE-------*/

const searchShow = () => {
    return new Promise((resolve, reject) => {
        const showName = document.getElementById("searchText").value.toLowerCase();
        if (showName) {
            const response = axios.get(`https://api.tvmaze.com/search/shows?q=${showName}`);
            resolve(response);
            //console.log(response);

        } else {
            reject("Error");
        }
    })
}

/*-------------------RESOLUCION DE LAS PROMESAS------------------*/

/*------------RESOLUCION: CARGAR LAS PELICULAS TOP Y CREA SU TARJETA POR CADA UNA --------*/
loadTopMovies()
    .then(result => {
        const moviesArray = result.data.results;
        console.log(moviesArray);
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
                    const showsGrid = document.querySelector(".freeMovies__container");
                    //showsGrid.innerHTML = '';
                    moviesGrid.appendChild(movieCard);
                })
                .catch(error => console.error(`Error en la API ${error}`));
        }
    })
    .catch(error => console.error(error));


/*------------RESOLUCION: BUSCA UN SHOW POR NOMBRE Y CREA SU TARJETA POR CADA RESULTADO --------*/

/*-------------------------EVENTO DEL ICONO DE BUSCAR-----------------*/
document.querySelector(".searchButton").addEventListener("click", () => {
    searchShow()
        .then(result => {
            const resultShows = result.data;
            resultShows.length = 9;
            console.log(resultShows);

            const backContentMain = document.querySelector(".showsResult__title--backContentMain");
            backContentMain.style.visibility = "visible";
            
            const showsResult = document.querySelector(".showsResult__container");
            showsResult.innerHTML = '';

            const showsResultTitleMain = document.querySelector(".showsResult__title--titleMain");
            //console.log(showsResultTitleMain);
            showsResultTitleMain.textContent = "RESULTADOS DE LA BUSQUEDA"

            for (const showItemSearch of resultShows) {
                //console.log(showItemSearch.show);

                const showsResultContainer = document.querySelector(".showsResult__container");

                const freeShows = document.querySelector(".freeShows");
                freeShows.innerHTML = '';

                const freeMovies = document.querySelector(".freeMovies");
                freeMovies.innerHTML = '';

                //console.log(showItem);
                const resultCard = showsResults(showItemSearch);
                //console.log(showItem);
                showsResultContainer.appendChild(resultCard);
            }
        })
        .catch(error => console.log(`Error en la api: ${error}`));
})

/*-------------------------EVENTO DE LA TECLA ENTER PARA BUSCAR-----------------*/


document.getElementById("searchText").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        searchShow().then(result => {

            const resultShows = result.data;
            resultShows.length = 9;
            console.log(resultShows);

            const backContentMain = document.querySelector(".showsResult__title--backContentMain");
            backContentMain.style.visibility = "visible";
            
            const showsResult = document.querySelector(".showsResult__container");
            showsResult.innerHTML = '';

            const showsResultTitleMain = document.querySelector(".showsResult__title--titleMain");
            //console.log(showsResultTitleMain);
            showsResultTitleMain.textContent = "RESULTADOS DE LA BUSQUEDA"

            for (const showItemSearch of resultShows) {
                //console.log(showItemSearch.show);

                const showsResultContainer = document.querySelector(".showsResult__container");

                const freeShows = document.querySelector(".freeShows");
                freeShows.innerHTML = '';

                const freeMovies = document.querySelector(".freeMovies");
                freeMovies.innerHTML = '';


                //console.log(showItem);
                const resultCard = showsResults(showItemSearch);
                //console.log(showItem);
                showsResultContainer.appendChild(resultCard);
            }

        })
        .catch (error => console.log(error));
    }

});


