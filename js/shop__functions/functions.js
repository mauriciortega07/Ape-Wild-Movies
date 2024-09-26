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
/* --------------- FORMULARIOS DE LOGIN - SIGNIN ---- */

//---- CREA EL FORMULARIO DE LOGIN

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
    closeContainerImage.alt = "icono de cerrar";
    closeIcon.appendChild(closeContainerImage);

    const divContainerUser = document.createElement("div");
    divContainerUser.classList.add("loginForm__user");
    sectionContainer.appendChild(divContainerUser);

    const loginTitle = document.createElement("h3");
    loginTitle.classList.add("loginForm__user--title");
    loginTitle.textContent = "Usuario";
    divContainerUser.appendChild(loginTitle);


    const loginText = document.createElement("input");
    loginText.classList.add("loginForm__user--text", "emailRegister");
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
    passContainer.classList.add("loginForm__pass--text", "passwordRegister");
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

    return fragment;
}

createLoginForm();

const loginElement = document.querySelector(".login");
loginElement.addEventListener("click", () => {
    document.querySelector(".loginForm").style.visibility = "visible";
    document.querySelector(".loginForm").style.opacity = "1";
    document.querySelector(".signinForm").style.visibility = "0";
    document.querySelector(".signinForm").style.opacity = "0";
});

const closeElement = document.querySelector(".closeImage");
closeElement.addEventListener("click", () => {
    document.querySelector(".loginForm").style.visibility = "hidden";
    document.querySelector(".loginForm").style.opacity = "0";
})


//---- CREA EL FORMULARIO DE SIGNIN

const createSigninForm = () => {
    const fragment = document.createDocumentFragment();

    const sectionContainer = document.createElement("section");
    sectionContainer.classList.add("signinForm");
    fragment.appendChild(sectionContainer);

    const closeContainer = document.createElement("div");
    closeContainer.classList.add("signinForm__close");
    sectionContainer.appendChild(closeContainer);
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("signinForm__close--icon");
    closeContainer.appendChild(closeIcon);

    const closeContainerImage = document.createElement("img");
    closeContainerImage.classList.add("closeImageSigninForm");
    closeContainerImage.src = "/img/icons/x-circle.svg"
    closeContainerImage.alt = "icono de cerrar";
    closeIcon.appendChild(closeContainerImage);

    const divContainerUser = document.createElement("form");
    divContainerUser.classList.add("signinForm__user");
    sectionContainer.appendChild(divContainerUser);

    const signinTitleName = document.createElement("h3");
    signinTitleName.classList.add("signinForm__user--title");
    signinTitleName.textContent = "NOMBRE";
    divContainerUser.appendChild(signinTitleName);

    const nameContainer = document.createElement("input");
    nameContainer.classList.add("signinForm__user--name", "nameUser");
    nameContainer.type = "text";
    nameContainer.placeholder = "Introduce tu nombre";
    divContainerUser.appendChild(nameContainer);

    const signinTitleLastName = document.createElement("h3");
    signinTitleLastName.classList.add("signinForm__user--title");
    signinTitleLastName.textContent = "APELLIDO";
    divContainerUser.appendChild(signinTitleLastName);

    const lastNameContainer = document.createElement("input");
    lastNameContainer.classList.add("signinForm__user--name", "lastNameUser");
    lastNameContainer.type = "text";
    lastNameContainer.placeholder = "Introduce tu apellido";
    divContainerUser.appendChild(lastNameContainer);

    const signinTitleMail = document.createElement("h3");
    signinTitleMail.classList.add("signinForm__user--title");
    signinTitleMail.textContent = "Correo electronico";
    divContainerUser.appendChild(signinTitleMail);

    const mailContainer = document.createElement("input");
    mailContainer.classList.add("signinForm__user--name", "emailUser");
    mailContainer.type = "email";
    mailContainer.placeholder = "Introduce tu correo";
    divContainerUser.appendChild(mailContainer);

    const signinTitlePass = document.createElement("h3");
    signinTitlePass.classList.add("signinForm__user--title");
    signinTitlePass.textContent = "Contraseña";
    divContainerUser.appendChild(signinTitlePass);

    const passContainer = document.createElement("input");
    passContainer.classList.add("signinForm__user--name", "passUser");
    passContainer.type = "password";
    passContainer.placeholder = "Introduce tu contraseña";
    divContainerUser.appendChild(passContainer);


    const botonSend = document.createElement("input");
    botonSend.classList.add("signinForm__button--send");
    botonSend.type = "button";
    botonSend.value = "Registrarse";
    divContainerUser.appendChild(botonSend);


    const headerContainer = document.querySelector("header").appendChild(fragment);

    return fragment;

}


//------ INVOCA LA FUNCION DEL FORMULARIO DE REGISTRO
createSigninForm();


//------- EVENTOS PARA CERRAR EL FORMULARIO DE REGISTRO
const siginElement = document.querySelector(".signin");
siginElement.addEventListener("click", () => {
    document.querySelector(".signinForm").style.visibility = "visible";
    document.querySelector(".signinForm").style.opacity = "1";

    document.querySelector(".loginForm").style.visibility = "hidden";
    document.querySelector(".loginForm").style.opacity = "0";
})
const closeElementSigninForm = document.querySelector(".closeImageSigninForm");
closeElementSigninForm.addEventListener("click", () => {
    document.querySelector(".signinForm").style.visibility = "hidden";
    document.querySelector(".signinForm").style.opacity = "0";
})

// ------- FUNCION DE REGISTRO DE USUARIOS

// ------- OBTENEMOS LOS VALORES DEL USUARIO A REGISTRAR

const signinFormUser = document.querySelector(".signinForm__button--send");
signinFormUser.addEventListener("click", () => {
    //e.preventDefault();

    const nameData = document.querySelector(".nameUser").value;
    const lastnameData = document.querySelector(".lastNameUser").value;
    const emailData = document.querySelector(".emailUser").value;
    const passData = document.querySelector(".passUser").value;

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserRegistered = Users.find(user => user.email === emailData);
    if (isUserRegistered) {
        return alert("Usuario Registrado");
    }
    Users.push({ name: nameData, lastname: lastnameData, email: emailData, password: passData });
    localStorage.setItem("users", JSON.stringify(Users))
    alert("Registro Exitoso!");

    window.location.href = "index.html"
    //const newUser = new User (nameData, lastnameData, emailData, passData);

});

// ------------------ INICIO DE SESION CON LOS USUARIOS REGISTRADOS

const loginFormUser = document.querySelector(".loginForm__button--send");
loginFormUser.addEventListener("click", () => {
    const emailRegister = document.querySelector(".emailRegister").value;
    console.log(emailRegister)
    const passwordRegister = document.querySelector(".passwordRegister").value;
    console.log(passwordRegister)

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const validUser = Users.find(user => user.email === emailRegister && user.password === passwordRegister);
    if (!validUser) {
        return alert("Usuario o contraseña incorrecta");
    }

    // ----- DESAPARECEN LAS OPCIONES DE SESION --------------------
    const headerContainerSession = document.querySelector(".headerContainer__session");
    const loginSigin = document.querySelector(".loginSigin").style.display = "none";
    
    //------ CREA LA TARJETA DE BIENVENIDA CON NOMBRE DE USUARIO -----------------
    const fragment = document.createDocumentFragment();
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("messageSession");
    fragment.appendChild(messageContainer);

    const message = document.createElement("h3");
    message.classList.add("messageSession__message");
    message.textContent = `Bienvenido ${validUser.name}`;
    messageContainer.appendChild(message);

    const logOutIcon = document.createElement("i");
    logOutIcon.classList.add("messageSession__logOutIcon");
    messageContainer.appendChild(logOutIcon);
    const logOutImage = document.createElement("input");
    logOutImage.classList.add("messageSession__logOutIcon--Image");
    logOutImage.type = "image";
    logOutImage.src = "/img/icons/log-out.svg";
    logOutImage.alt = "Icono de cerrar sesion";
    logOutIcon.appendChild(logOutImage);

    headerContainerSession.appendChild(fragment);

    document.querySelector(".loginForm").style.visibility = "hidden"
    document.querySelector(".loginForm").style.opacity = "0";

    localStorage.setItem('login_success', JSON.stringify(validUser))

    // ------------------ CERRAR SESION -----------

    const userLoginSucces = JSON.parse(localStorage.getItem('login_success')) || false;

    const logOut = document.querySelector(".messageSession__logOutIcon");

    logOut.addEventListener("click", () => {
        alert("Sesion Cerrada");
        localStorage.removeItem('login_success');
        window.location.href = "index.html"
    });


});

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

    showItem.show.genres.forEach(genre => {
        console.log(genre);
        const genreText = document.createElement("p");
        genreText.classList.add("infoshowsResult__genre");
        genreText.textContent = genre;
        infoshowsResultGenre.appendChild(genreText);
    });

    const infoshowsResultSummary = document.createElement("p");
    infoshowsResultSummary.classList.add("infoshowsResult__summary");
    //console.log(showItem.show.summary.length);
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

//------------------- SECCION DE RENTA DE PELICULAS -----------------

//----------CREA LA TARJETA DE LA PELICULA A RENTAR CON SU INFORMACION CORRESPONDIENTE
const createItemRent = (item) => {
    const productsGridItem = document.createElement("div");
    productsGridItem.classList.add("productsGrid__item");

        const itemCover = document.createElement("img");
        itemCover.classList.add("itemCover");
        itemCover.src = item.srcImageComplete;
        itemCover.alt = item.title;
        productsGridItem.appendChild(itemCover);

        const infoItem = document.createElement("div");
        infoItem.classList.add("infoItem");
        productsGridItem.appendChild(infoItem);

            const infoItemTitle = document.createElement("h2");
            infoItemTitle.classList.add("infoItem__title");
            infoItemTitle.innerText = item.title;
            infoItem.appendChild(infoItemTitle);

            const infoItemResolution = document.createElement("img");
            infoItemResolution.classList.add("infoItem__resolution")
            infoItemResolution.src = "/img/icons/—Pngtree—4k ultra hd png image_7899952.png";
            infoItem.appendChild(infoItemResolution);

            const infoItemGenre = document.createElement("div");
            infoItemGenre.classList.add("infoItem__genre");
            infoItem.appendChild(infoItemGenre);
            
            for (const genre of item.genreBroad) {
                const genreText = document.createElement("p");
                genreText.classList.add("infoItem__genre");
                genreText.innerText = genre;
                infoItemGenre.appendChild(genreText);
                
            }

            const infoItemSummary = document.createElement("p");
            infoItemSummary.classList.add("infoItem__summary");
            if (item.overview === ""){
                item.overview = `Descripcion no disponible`;
                infoItemSummary.innerText = item.overview ;
            } else {
                infoItemSummary.innerText = reduceSummary(item.overview, 100);
            }
           
            infoItem.appendChild(infoItemSummary);

            const infoItemPrice = document.createElement("p");
            infoItemPrice.classList.add("infoItem__price");
            infoItemPrice.innerText = `$150.00 x 8 dias`;
            infoItem.appendChild(infoItemPrice);

            const infoItemAddCart = document.createElement("div");
            infoItemAddCart.classList.add("infoItem__addCart");
            infoItem.appendChild(infoItemAddCart);

                const addCartIcon = document.createElement("i");
                addCartIcon.classList.add("infoItem__addCart--icon");
                infoItemAddCart.appendChild(addCartIcon);

                    const addCartImage = document.createElement("img");
                    addCartImage.classList.add("addCartImage");
                    addCartImage.src = "img/icons/plus-circle.svg";
                    addCartImage.alt = `icono de agregar producto al carrito`;
                    addCartIcon.appendChild(addCartImage);

    

    return productsGridItem;
}

//------------------------------------------ FUNCIONES --------------------------------------------

/*---------------------------------FUNCIONES ASYNC/AWAIT CON AXIOS---------------------*/
/*------OBTIENE RESPUESTA DE LA API PARA ACCEDER A LA CONFIGURTACION DE LA URL BASE DE LAS IMAGENES-------*/
const loadItemsRent = async () => {
    try {
        const responseConfig = await axios.get("https://api.themoviedb.org/3/configuration?api_key=9ccb1e5ad211eb690aa7441e5b39bef2");
        //console.log(responseConfig.data.images.backdrop_sizes[3]);
        const urlBase = `${responseConfig.data.images.base_url}${responseConfig.data.images.backdrop_sizes[3]}`;
        //console.log(urlBase);
        try {
            const responseItemsRent = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9ccb1e5ad211eb690aa7441e5b39bef2", {params: {language: 'es-MX', page:'1'}});
            //console.log(responseItemsRent);
            const itemsRent = responseItemsRent.data.results;
            //console.log(itemsRent);

            for (const item of itemsRent) {
                console.log(item);
                const posterPath = item.poster_path;
                item.url_base = urlBase
                const urlImageBase = item.url_base;
                //console.log(item);
                const srcComplete = `${urlImageBase}${posterPath}`;
                item.srcImageComplete = srcComplete;
                //console.log(srcComplete);
                //const sourceImage = 
                item.genreBroad = ["Accion", "Aventura", "Drama"];
                const genre = item.genreBroad;
                //console.log(genre);
                const cardItemRent = createItemRent(item);
                const productsGrid = document.querySelector(".contentFlex__productsGrid--grid");
                productsGrid.appendChild(cardItemRent);                  
            }

        } catch(error) {
            console.error(`error al cargar los datos de las peliculas${error}`);
        }

    } catch (error) {
        console.erro(`error al cargar los datos de configuracion de imagenes${error}`);
    }
}

document.addEventListener("DOMContentLoaded", loadItemsRent);


/*---------------------------------FUNCIONES PROMISES CON AXIOS---------------------*/
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

                //const freeShows = document.querySelector(".freeShows");
                //freeShows.innerHTML = '';

                //const freeMovies = document.querySelector(".freeMovies");
                //freeMovies.innerHTML = '';

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

                //const freeShows = document.querySelector(".freeShows");
                //freeShows.innerHTML = '';

                //const freeMovies = document.querySelector(".freeMovies");
                //freeMovies.innerHTML = '';


                //console.log(showItem);
                const resultCard = showsResults(showItemSearch);
                //console.log(showItem);
                showsResultContainer.appendChild(resultCard);
            }

        })
            .catch(error => console.log(error));
    }

});