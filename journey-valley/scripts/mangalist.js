const base_url = "https://api.jikan.moe/v4/top/manga";

function pageLoaded() {
    fetch(base_url)
        .then(response => response.json(), {mode: 'no-cors'})
        .then(data => console.log(data))
        .catch(error => console.warn(error));
}


window.addEventListener('load', pageLoaded); 