const base_url = "https://api.jikan.moe/v4/random/manga";

// var grid = document.querySelector('.grid-bestsellers');
// var msnry;

// imagesLoaded( grid, function() {
//   msnry = new Masonry( grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
//     gutter: 10,
//   });
// });



async function loadPictures(manga_id) {
    const images_url = "https://api.jikan.moe/v4/manga/" + manga_id + "/pictures";

    let getPictures = fetch(images_url)
        .then(response => response.json(), { mode: 'no-cors' })
        .then(data => {
            return data.data;
        })
        .catch(error => console.log(error));
    
    const result_1 = await getPictures;
    return result_1;
}

async function getFullMangaData(manga_id) {
    const manga_url = "https://api.jikan.moe/v4/manga/" + manga_id + "/full";
    let getManga = fetch(manga_url)
        .then(response => response.json(), { mode: 'no-cors' })
        .then(data => {
            return data.data;
        })
        .catch(error => console.log(error));
    
    const new_result = await getManga;
    return new_result;
}

function loadData() {
    fetch(base_url)
        .then(response => response.json(), { mode: 'no-cors' })
        .then(data => displayManga(data))
        .catch(error => console.log(error));
}


async function displayManga(data) {
    console.log(data);
    let manga_id = data.data.mal_id;
    let manga_pictures = await loadPictures(2);
    let manga_data = await getFullMangaData(2);
    console.log(manga_data);
    console.log(manga_id);
    console.log(manga_pictures);
    let manga_main_pic = manga_data.images.jpg.large_image_url;
    console.log(manga_main_pic);
    const mangaItem = `
        <div class="manga-info">
            <div class="first-chapter">
                <img src="${manga_pictures[0].jpg.image_url}">
                <div class="first-chapter-info">
                    <h2>Tom 1</h2>
                    <p>${manga_data.title_japanese}</p>
                    <div class="btn-list">
                        <div class="first-chapter-btn">
                            <a href="manga-page.html">Buy</a>
                        </div>
                        <div class="first-chapter-btn">
                            <a href="manga-page.html">Read</a>
                        </div>
                        <div class="first-chapter-btn">
                            <a href="manga-page.html">Something</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="manga-item-info">
                <h1>${manga_data.title}</h1>
                <p>${manga_data.synopsis}</p>
            </div> 
        </div>

        <div class="all-chapters-list">
            <!-- n chapters pictures -->
            <div class="container">
                <div class="grid-row">
                    <div class="grid-item">
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                    </div>
                    <div class="grid-item">
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                    </div>
                    <div class="grid-item">
                        <img class="pussy_image" src="assets/img/des1.png"" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                    </div>
                </div>
            </div>
        </div>

        <div class="manga-illustrations">
            <!-- n illustrations pictures -->
            <div class="container">
                <div class="grid-row">
                    <div class="grid-item">
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                    </div>
                    <div class="grid-item">
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                    </div>
                    <div class="grid-item">
                        <img class="pussy_image" src="assets/img/des1.png"" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                        <img class="pussy_image" src="assets/img/des1.png" />
                    </div>
                </div>
            </div>`;
            document.querySelector(".manga-item").insertAdjacentHTML("beforeend", mangaItem);
}

function pageLoaded() {
    loadData();
}


window.addEventListener('load', pageLoaded); 