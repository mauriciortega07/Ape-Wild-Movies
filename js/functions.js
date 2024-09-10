
const createShowContainerItem = (item) => {
    const containerItem = document.createElement("div");
    containerItem.classList.add("freeShows__container--item");

    const showsCover = document.createElement("img");
    showsCover.classList.add("itemCover");
    showsCover.src = item.image.medium;
    showsCover.alt = item.name;

    const showsName = document.createElement("h1");
    showsName.innerHTML = item.name
    
    containerItem.appendChild(showsCover);
    containerItem.appendChild(showsName);
    
    return containerItem;
};


const loadShows = async () => {
    const showsGrid = document.getElementsByClassName("freeShows__container");
    try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        const shows = response.data;
        shows.length = 10;

        showsGrid.innerHTML= '';
        
        for (const item of shows) {
            console.log(item);
            const detailsResponse = await axios.get(item.url);
            const showCard = createShowContainerItem(detailsResponse.data);
            showsGrid.appendChild(showCard);
        }

    } catch (error) {
        console.log(`${error}`);
    }
}

document.addEventListener("DOMContentLoaded", loadShows);