const base_url = "https://api.jikan.moe/v4/top/manga?page=1&limit=21";

function loadManga() {
    fetch(base_url)
        .then(response => response.json(), { mode: 'no-cors' })
        .then(data => displayManga(data))
        .catch(error => console.log(error));
}

function displayManga(data) {
    console.log(data);
    const manga = data.data;
    console.log(manga);
    // const mangaList = document.getElementById("manga-list");
    manga.forEach(manga => {
        let chapter = manga.chapters;
        if (chapter == null) {
            chapter = "ongoing";
        }
        let title = manga.title;
        if (title.length > 20) {
            title = title.substring(0, 20) + "...";
        }
        if (title == "Berserk") {
            chapter = "RIP Miura";
        }
        const mangaItem = 
        `<div class="grid-item">
          <span>
            <h3>${title}</h3>
            <p>Rank: ${manga.rank} Score: ${manga.score}</p>    
            <p>Members: ${manga.members}</p>
            <p>Chapters: ${chapter}</p>
          </span>
          <img class="pussy_image" src="${manga.images.jpg.image_url}" />
      </div>`;
        document.querySelector(".grid-row").insertAdjacentHTML("beforeend", mangaItem);
     });
}

function pageLoaded() {
    loadManga();
}


window.addEventListener('load', pageLoaded); 