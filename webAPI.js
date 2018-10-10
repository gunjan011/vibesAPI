const baseUrl = 'http://www.songsterr.com/a/ra/songs.json?pattern=';
let url;
let iTarget;

const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');
//const nav = document.querySelector('nav');

//nav.style.display = 'none';

//let pageNumber = 0;
//let displayNav = false;

searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();
    console.log(e);
    url = `${baseUrl} + ${search.value}`;
    //url = baseUrl;
    console.log('URL:', url);

fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json)
        displayResults(json);
        });
    }
    function displayResults(json) {

        while (section.firstChild) {
        section.removeChild(section.firstChild); }
        let songResults = json;
     
        if(songResults.length === 0) {
          console.log("No results");
          } else {
     
              for(let i = 0; i < songResults.length && i <= 10; i++) {
              let article = document.createElement('article');
              let heading = document.createElement('h3');
              let link = document.createElement('a');
              link.className = 'linkColor';
              let linkToSong= "http://www.songsterr.com/a/wa/song?id=";
              link.setAttribute("target", "_blank");
     
              let current = songResults[i];
              console.log("Current:", current);
              idNum = current.id;
              link.href = linkToSong+idNum;
              artistName = current.artist.name;
              songName = current.title;
              link.textContent = '  Play ==>  ' + artistName + "  |  " + songName;
              article.appendChild(heading);
              heading.appendChild(link);
              section.appendChild(article);
              }
          }

     };