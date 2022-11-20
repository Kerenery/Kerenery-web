const base_url = "https://api.jikan.moe/v4/top/characters";

var grid = document.querySelector('.grid-bestsellers');
var msnry;

imagesLoaded( grid, function() {
  msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 10,
  });
});

function loadData() {
    fetch(base_url)
        .then(response => response.json(), { mode: 'no-cors' })
        .then(data => displayManga(data))
        .catch(error => console.log(error));
}


async function displayManga(data) {
    console.log(data);
    data.data.forEach(manga => {
        const mangaItem = 
        `<div class="grid-item">
          <img src="${manga.images.jpg.image_url}" />
        </div>`;
        document.querySelector(".grid-item").insertAdjacentHTML("afterend", mangaItem);
     });
}

function pageLoaded() {
    loadData();
}


// window.addEventListener('load', pageLoaded); 

