console.log("Let's get this party started!");

const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#searchButton');
const removeButton = document.querySelector('#removeButton');
const mainContentArea = document.querySelector('.content');

searchButton.addEventListener('click', async function(evt) {
    evt.preventDefault();
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    searchInput.value = "";
    const idx = Math.floor(Math.random() * response.data.data.length);
    const img = response.data.data[idx].images.fixed_height.url;
    createAndAddImage(img);
});

removeButton.addEventListener('click', evt => {
    evt.preventDefault();
    const allImages = document.querySelectorAll('img');
    for (let img of allImages) {
        img.remove();
    };
});

const createAndAddImage = source => {
    let newImage = document.createElement('img');
    newImage.classList.add('image');
    newImage.src = source;
    mainContentArea.append(newImage);
}