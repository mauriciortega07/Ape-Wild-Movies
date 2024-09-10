
const createShowContainerItem = (item) => {
    console.log(item.image.medium)
    const containerItem = document.createElement("div");
    containerItem.classList.add("freeShows__container--item");

    const showsCover = document.createElement("img");
    showsCover.classList.add("itemCover");
    showsCover.src = item.image.original;
    showsCover.alt = item.name;

    containerItem.appendChild(showsCover);
  
    return containerItem;
};


const loadShows = async () => {
    const showsGrid = document.querySelector(".freeShows__container");
    try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        const shows = response.data;
        shows.length = 10;
        console.log(shows);

        showsGrid.innerHTML = '';

        for (const item of shows) {
            console.log(item);
            //console.log(item)
            const detailsResponse = await axios.get(item._links.self.href);
            console.log(detailsResponse);
            const showCard = createShowContainerItem(detailsResponse.data);
            showsGrid.appendChild(showCard);
        }

    } catch (error) {
        console.log(`${error}`);
    }
}

document.addEventListener("DOMContentLoaded", loadShows);