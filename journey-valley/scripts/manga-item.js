const base_url = "https://api.jikan.moe/v4/random/manga";


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


function displayManga(data) {
    console.log(data);
    let manga_id = data.data.mal_id;
    let manga_pictures = loadPictures(manga_id);
    let manga_data = getFullMangaData(manga_id);
    console.log(manga_data);
    console.log(manga_id);
    console.log(manga_pictures);
}

function pageLoaded() {
    loadData();
}


window.addEventListener('load', pageLoaded); 