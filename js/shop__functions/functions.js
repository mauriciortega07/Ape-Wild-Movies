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

// ---------------------------------- FUNCION DE REGISTRO DE USUARIOS ------------------------

// -------------- OBTENEMOS LOS VALORES DEL USUARIO A REGISTRAR Y SE REGISTRA -----------

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

    window.location.href = "shop.html"
    //const newUser = new User (nameData, lastnameData, emailData, passData);

});

// --------------------- INICIO DE SESION CON LOS USUARIOS REGISTRADOS ---------------

/*------- FUNCION QUE CREA LA TARJETA DE BIENVENIDA AL INICIAR SESION, AGREGA 
ICONOS DE SHOPPING Y DE LOGOUT*/
const activeSession = (validUser) => {
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

    const shoppingIcon = document.createElement("i");
    shoppingIcon.classList.add("messageSession__shoppingIcon");
    messageContainer.appendChild(shoppingIcon);
    
    const shoppingImage = document.createElement("input");
    shoppingImage.classList.add("messageSession__shoppingIcon--Image");
    shoppingImage.type = "image";
    shoppingImage.src = "/img/icons/shopping-bag.svg";
    shoppingImage.alt = "Icono de bolsa de compra";

    const counterIcon = document.createElement("div");
    counterIcon.classList.add("countIcon");
    messageContainer.appendChild(counterIcon);
    const counter = document.createElement("span");
    counter.classList.add("counter");
    counter.textContent = "0"
    counterIcon.appendChild(counter);


    //---------------EVENTOS DE CERRAR Y ABRIR LA BOLSA DE COMPRAS
    shoppingIcon.addEventListener("click", ()=>{
        document.querySelector(".shoppingBag").style.opacity = "1";
        document.querySelector(".shoppingBag").style.visibility = "visible";
        console.log("click");
    });

    document.querySelector(".shoppingBag__close--image").addEventListener("click", ()=>{
        document.querySelector(".shoppingBag").style.opacity = "0";
        document.querySelector(".shoppingBag").style.visibility = "hidden";

    });
    shoppingIcon.appendChild(shoppingImage);

    //--------------- SE CREA EL ICONO DE CERRAR SESSION -------------------
    const logOutIcon = document.createElement("i");
    logOutIcon.classList.add("messageSession__logOutIcon");
    messageContainer.appendChild(logOutIcon);
    const logOutImage = document.createElement("input");
    logOutImage.classList.add("messageSession__logOutIcon--Image");
    logOutImage.type = "image";
    logOutImage.src = "/img/icons/log-out.svg";
    logOutImage.alt = "Icono de cerrar sesion";
    logOutIcon.appendChild(logOutImage);
    //------------ SE AGREGA EL NUEVO FRAGMENTO DE LA TARJETA DE BIENVENIDA
    headerContainerSession.appendChild(fragment);

    //--------------- DESAPARACE EL LOGIN
    document.querySelector(".loginForm").style.visibility = "hidden"
    document.querySelector(".loginForm").style.opacity = "0";
}

//---------------- INICIO DE SESION ---------------

const loginFormUser = document.querySelector(".loginForm__button--send");
loginFormUser.addEventListener("click", () => {
    const emailRegister = document.querySelector(".emailRegister").value;
    console.log(emailRegister)
    const passwordRegister = document.querySelector(".passwordRegister").value;
    console.log(passwordRegister)
    //------- VALIDACION DE QUE EL USUARIO EXISTA EN EL LOCALSTORAGE
    const Users = JSON.parse(localStorage.getItem("users")) || []
    const validUser = Users.find(user => user.email === emailRegister && user.password === passwordRegister);
    if (!validUser) {
        return alert("Usuario o contraseña incorrecta");
    } 
    /*SI EL USUARIO EXISTE SE CREA UN MENU CON UN MENSAJE DE BIENVENIDA E ICONOS DE PERFIL*/
    activeSession(validUser);

    /*AL INICIAR SESION SE REGISTRA EN EL LOCALSTORAGE PARA LA VALIDACION DE SESION*/
    localStorage.setItem('login_success', JSON.stringify(validUser))
    // ------------------ CERRAR SESION -----------

    const logOut = document.querySelector(".messageSession__logOutIcon");

    logOut.addEventListener("click", () => {
        alert("Sesion Cerrada");
        localStorage.removeItem('login_success');
        window.location.href = "index.html"
    });
    //const userLoginSucces = JSON.parse(localStorage.getItem('login_success')) || false;
    
});
//--------------- MANTIENE LA SESION INICIADA -----------
const userLoginSucces = JSON.parse(localStorage.getItem('login_success')) || false;
    if (userLoginSucces) {
      activeSession(userLoginSucces);

// ------------------EVENTO DE CERRAR SESION -----------
    const logOut = document.querySelector(".messageSession__logOutIcon");

    logOut.addEventListener("click", () => {
        alert("Sesion Cerrada");
        localStorage.removeItem('login_success');
        window.location.href = "shop.html"
    });
    
}

/*----------------- RESULTADOS DE LA BUSQUEDA DE TITULOS-------------------*/

//crea las tarjetas de info. cada show que arroja la busqueda
const showsResults = (showItem) => {
    //console.log(showItem);

    const showsSearchContainerItem = document.createElement("div");
    showsSearchContainerItem.classList.add("showsResult__container--item");

    const showsSearchImg = document.createElement("img");
    showsSearchImg.classList.add("itemCover");
    //console.log(showsSearchImg.src.innerHTML = showItem.image.medium)

    if (showItem.show.image === null) {
        showItem.show.image = "/img/49f6b89bd291722c227e312eaa7d04e4380b4c0b7611bf68a82c328d2c00fcb9-width317-quality60.webp"
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
        //console.log(genre);
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

    const pageNumber = document.querySelector(".pageNumber");
    pageNumber.style.display = "none";

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
            infoItemResolution.src = "/img/icons/4k-logo.png";
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

            const infoItemPrice = document.createElement("div");
            infoItemPrice.classList.add("infoItem__price")
            infoItem.append(infoItemPrice);

                const ItemDenomination = document.createElement("p");
                ItemDenomination.classList.add("ItemDenomination");
                ItemDenomination.innerText = `$`;
                infoItemPrice.appendChild(ItemDenomination);

                const ItemPrice = document.createElement("p");
                ItemPrice.classList.add("ItemPrice");
                ItemPrice.innerText = `150.00`;
                infoItemPrice.appendChild(ItemPrice);

            const infoItemAddCart = document.createElement("div");
            infoItemAddCart.classList.add("infoItem__addCart");
            infoItem.appendChild(infoItemAddCart);

                const addCartIcon = document.createElement("i");
                addCartIcon.classList.add("infoItem__addCart--icon");
                infoItemAddCart.appendChild(addCartIcon);

                    const addCartImage = document.createElement("input");
                    addCartImage.classList.add("addCartImage");
                    addCartImage.type = "image"
                    addCartImage.src = "img/icons/plus-circle.svg";
                    addCartImage.alt = `icono de agregar producto al carrito`;
                    addCartIcon.appendChild(addCartImage);

return productsGridItem;
}

const createItemBag = boton => {
    const fragment = document.createDocumentFragment();

    const itemRenta = boton.parentElement;
    const itemPadreRenta = boton.parentElement.parentElement;
    //console.log(itemPadreRenta);

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("bagItem");
    fragment.appendChild(itemContainer);

        const imageCover = document.createElement("img");
        imageCover.classList.add("bagItem__cover");
        const imageCoverSrc = itemPadreRenta.firstElementChild;
        imageCover.src = imageCoverSrc.getAttribute("src");
        itemContainer.appendChild(imageCover);
        //console.log(imageCoverSrc.src)

        const productTitle = document.createElement("p");
        productTitle.classList.add("bagItem__title");
        //console.log(itemRenta.firstElementChild)
        const bagItemTitle = itemRenta.firstElementChild;
        productTitle.textContent = bagItemTitle.innerText;
        itemContainer.appendChild(productTitle);

        const denominationTitle = document.createElement("p");
        denominationTitle.classList.add("bagItem__denomination");
        const bagItemDenomination = itemRenta.lastElementChild.previousSibling.firstElementChild;
        //console.log(bagItemDenomination);
        denominationTitle.textContent = bagItemDenomination.innerText;
        itemContainer.appendChild(denominationTitle);

        const priceTitle = document.createElement("p");
        priceTitle.classList.add("bagItem__price");
        const bagItemPrice = bagItemDenomination.nextElementSibling;
        priceTitle.textContent = bagItemPrice.innerText;
        itemContainer.appendChild(priceTitle);

        const deleteItem = document.createElement("i");
        deleteItem.classList.add("bagItem__iconRemove");
        itemContainer.appendChild(deleteItem)
            const deleteImage = document.createElement("img");
            deleteImage.classList.add("imageRemove");
            deleteImage.src = "img/icons/trash-2.svg";
            deleteImage.alt = "Icono de eliminar producto";
            deleteItem.appendChild(deleteImage);
        
            //EVENTO PARA ELIMINAR UN ARTICULO DE LA BOLSA DE COMPRAS
            deleteImage.addEventListener("click", () => {
            
            const itemParent = deleteImage.parentElement.parentElement;
            itemParent.remove();

            const productsCount = document.querySelector(".shoppingBag__items");
            console.log(productsCount)
            const bagItems = productsCount.childNodes.length-1;
            const counterItems = document.querySelector(".counter");
            console.log(bagItems)
            counterItems.textContent = bagItems
        });

    //Activacion del badge
    //const counterIcon = document.querySelector(".countIcon");
    //Se obtiene el padre de los elementos agregados del carrito
    const productsBag = document.querySelector(".shoppingBag__items")
    //Se obtiene la cantidad de productos en la bolsa de productos
    const productsCount = productsBag.childNodes.length;
    console.log(productsCount);
    const counterItems = document.querySelector(".counter");
    counterItems.innerHTML = productsCount

    document.querySelector(".shoppingBag__items").appendChild(fragment);
}

//------------------------------------------ FUNCIONES --------------------------------------------

/*---------------------------------FUNCIONES ASYNC/AWAIT CON AXIOS---------------------*/
/*------OBTIENE RESPUESTA DE LA API PARA ACCEDER A LA CONFIGURACION DE LA URL BASE DE LAS IMAGENES-------*/
const loadItemsRent = async () => {
    try {
        const responseConfig = await axios.get("https://api.themoviedb.org/3/configuration?api_key=9ccb1e5ad211eb690aa7441e5b39bef2");
        const urlBase = `${responseConfig.data.images.base_url}${responseConfig.data.images.backdrop_sizes[3]}`;
/*------OBTIENE RESPUESTA DE LA API PARA ACCEDER A LAS PELICULAS-------*/
        try {
            const responseItemsRent = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9ccb1e5ad211eb690aa7441e5b39bef2", {params: {language: 'es-MX', page:'1'}});
            //console.log(responseItemsRent);
            const itemsRent = responseItemsRent.data.results;
            //console.log(itemsRent);
            //POR CADA ITEM DE LA LISTA DE RESULTADOS SE CONSTRUYE SU TARJETA DE INFORMACION
            for (const item of itemsRent) {
                //console.log(item);
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

    //------------------------- SHOPPINGBAG --------------
    //----------------- EVENTO DEL BOTON PARA AGREGAR ITEMS A LA BOLSA DE COMPRAS -------
        const addShoppingBag = document.querySelectorAll(".infoItem__addCart");

        const addProductButton = boton => {
            boton.addEventListener("click", () => {
                //----VALIDA SI HAY UN USUARIO EN SESSION PARA PODER AGREGAR PRODUCTSO A LA BOLSA DE COMPRAS
                const userLoginSucces = JSON.parse(localStorage.getItem('login_success')) || false;
                if (!userLoginSucces){
                    alert(`DEBES INICIAR SESION PARA AGREGAR UN PRODUCTO A LA BOLSA DE COMPRAS`);
                } else {
                    //SE CREA EL ITEM EN LA BOLSA DE COMPRAS
                    for (let i = 0; i < 1; i++){
                        createItemBag(boton);
                        alert("Se ha agregado un articulo a la bolsa de compras");
                    }
                }
            });
        }

        addShoppingBag.forEach(addProductButton);

        } catch(error) {
            console.error(`error al cargar los datos de las peliculas${error}`);
        }

    } catch (error) {
        console.erro(`error al cargar los datos de configuracion de imagenes${error}`);
    }
}

document.addEventListener("DOMContentLoaded", loadItemsRent());
/* -------- EVENTO QUE CARGA LA PRIMERA PAGINA DE LAS PELICULAS A RENTAR */

const pageOne = document.querySelector(".pageNumber__list").firstElementChild;
pageOne.addEventListener("click", ()=>{
    const pageNumberTwo = document.querySelector(".pageNumber__list").firstElementChild.nextElementSibling;
    const pageNumberThree = pageNumberTwo.nextElementSibling;
    loadItemsRent();
    document.querySelector(".contentFlex__productsGrid--grid").innerHTML = '';
    pageOne.style.textDecoration="underline";
    pageNumberTwo.style.textDecoration="none";
    pageNumberThree.style.textDecoration="none";

});


/* --------SE CARGA LA SEGUNDA PAGINA DE RESULTADOS DE PELICULAS PARA RENTAR ------ */

const loadItemsRentPage2 = async () => {
    try {
        const responseConfig = await axios.get("https://api.themoviedb.org/3/configuration?api_key=9ccb1e5ad211eb690aa7441e5b39bef2");
        const urlBase = `${responseConfig.data.images.base_url}${responseConfig.data.images.backdrop_sizes[3]}`;
/*------OBTIENE RESPUESTA DE LA API PARA ACCEDER A LAS PELICULAS-------*/
        try {
            const responseItemsRent = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9ccb1e5ad211eb690aa7441e5b39bef2", {params: {language: 'es-MX', page:'2'}});
            //console.log(responseItemsRent);
            const itemsRent = responseItemsRent.data.results;
            //console.log(itemsRent);
            //POR CADA ITEM DE LA LISTA DE RESULTADOS SE CONSTRUYE SU TARJETA DE INFORMACION
            for (const item of itemsRent) {
                //console.log(item);
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

    //------------------------- SHOPPINGBAG --------------
    //----------------- EVENTO DEL BOTON PARA AGREGAR ITEMS A LA BOLSA DE COMPRAS -------
        const addShoppingBag = document.querySelectorAll(".infoItem__addCart");

        const addProductButton = boton => {
            boton.addEventListener("click", () => {
                //----VALIDA SI HAY UN USUARIO EN SESSION PARA PODER AGREGAR PRODUCTSO A LA BOLSA DE COMPRAS
                const userLoginSucces = JSON.parse(localStorage.getItem('login_success')) || false;
                if (!userLoginSucces){
                    alert(`DEBES INICIAR SESION PARA AGREGAR UN PRODUCTO A LA BOLSA DE COMPRAS`);
                } else {
                    //SE CREA EL ITEM EN LA BOLSA DE COMPRAS
                    for (let i = 0; i < 1; i++){
                        alert("Se ha agregado un articulo a la bolsa de compras");
                        createItemBag(boton);
                    }
                }
            });
        }

        addShoppingBag.forEach(addProductButton);

        } catch(error) {
            console.error(`error al cargar los datos de las peliculas${error}`);
        }

    } catch (error) {
        console.erro(`error al cargar los datos de configuracion de imagenes${error}`);
    }
}

const pageTwo = document.querySelector(".pageNumber__list").firstElementChild.nextElementSibling;
pageTwo.addEventListener("click", () => {
    const pageNumberList = document.querySelector(".pageNumber__list")
    loadItemsRentPage2();
    document.querySelector(".contentFlex__productsGrid--grid").innerHTML = '';
    pageTwo.style.textDecoration="underline";
    pageNumberList.firstElementChild.style.textDecoration="none";
    pageNumberList.lastElementChild.style.textDecoration="none";
});

/* --------SE CARGA LA SEGUNDA PAGINA DE RESULTADOS DE PELICULAS PARA RENTAR ------ */

const loadItemsRentPage3 = async () => {
    try {
        const responseConfig = await axios.get("https://api.themoviedb.org/3/configuration?api_key=9ccb1e5ad211eb690aa7441e5b39bef2");
        const urlBase = `${responseConfig.data.images.base_url}${responseConfig.data.images.backdrop_sizes[3]}`;
/*------OBTIENE RESPUESTA DE LA API PARA ACCEDER A LAS PELICULAS-------*/
        try {
            const responseItemsRent = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9ccb1e5ad211eb690aa7441e5b39bef2", {params: {language: 'es-MX', page:'3'}});
            //console.log(responseItemsRent);
            const itemsRent = responseItemsRent.data.results;
            //console.log(itemsRent);
            //POR CADA ITEM DE LA LISTA DE RESULTADOS SE CONSTRUYE SU TARJETA DE INFORMACION
            for (const item of itemsRent) {
                //console.log(item);
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

    //------------------------- SHOPPINGBAG --------------
    //----------------- EVENTO DEL BOTON PARA AGREGAR ITEMS A LA BOLSA DE COMPRAS -------
        const addShoppingBag = document.querySelectorAll(".infoItem__addCart");

        const addProductButton = boton => {
            boton.addEventListener("click", () => {
                //----VALIDA SI HAY UN USUARIO EN SESSION PARA PODER AGREGAR PRODUCTSO A LA BOLSA DE COMPRAS
                const userLoginSucces = JSON.parse(localStorage.getItem('login_success')) || false;
                if (!userLoginSucces){
                    alert(`DEBES INICIAR SESION PARA AGREGAR UN PRODUCTO A LA BOLSA DE COMPRAS`);
                } else {
                    //SE CREA EL ITEM EN LA BOLSA DE COMPRAS
                    for (let i = 0; i < 1; i++){
                        alert("Se ha agregado un articulo a la bolsa de compras");
                        createItemBag(boton);
                    }
                }
            });
        }

        addShoppingBag.forEach(addProductButton);

        } catch(error) {
            console.error(`error al cargar los datos de las peliculas${error}`);
        }

    } catch (error) {
        console.erro(`error al cargar los datos de configuracion de imagenes${error}`);
    }
}

const pageThree = document.querySelector(".pageNumber__list").lastElementChild;
pageThree.addEventListener("click", () => {
    const pageNumberList = document.querySelector(".pageNumber__list")
    loadItemsRentPage3();
    document.querySelector(".contentFlex__productsGrid--grid").innerHTML = '';
    pageThree.style.textDecoration="underline";
    pageNumberList.firstElementChild.style.textDecoration="none";
    pageNumberList.firstElementChild.nextElementSibling.style.textDecoration="none";
});

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
            //console.log(resultShows);

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
                const productsGrid = document.querySelector(".contentFlex__productsGrid");
                productsGrid.innerHTML = ''
                //console.log(showItemSearch);
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

                const productsGrid = document.querySelector(".contentFlex__productsGrid");
                productsGrid.innerHTML = ''
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



