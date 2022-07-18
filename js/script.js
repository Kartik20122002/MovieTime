let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
})



searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
})

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
})


function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}


const API_KEY = 'api_key=e272f317f8df98d65d0f955c6dc2b70d';
const Imbd_api = 'k_rldl3rxl';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';



const nowplaying = BASE_URL + '/movie/now_playing?' + API_KEY + '&region=in';
const upcoming = BASE_URL + '/movie/upcoming?' + API_KEY + '&region=in';
const trending = BASE_URL + '/trending/movie/week?' + API_KEY + '&region=in';
const searchURL = BASE_URL + '/search/movie?' + API_KEY + '&query=';


function getMovies(url, ids, n) {

    fetch(url).then(res => res.json()).then(data => {
        let c;
        const result = data.results;
        console.log(result);
          c =result;
        const main = document.getElementById(ids.id)
        main.innerHTML=' ';

        for (let i = 0; i < n; i++) {
            const dive = document.createElement('div');
            dive.classList.add('moviebox');

            const { poster_path, title, release_date ,id} = result[i];

            dive.innerHTML = `

        <a href="page2.html" id="${ids.id}${i + 1}">
            <div class="imgbx" >
        <img src="${IMG_URL + poster_path}" alt="${title}">
            </div>
         <div class="details">
              <h2>${title} <br> <span> ${release_date} </span> </h2>
      
            </div>
        </a>
            `
            main.appendChild(dive);
            let cl = document.getElementById(`${ids.id}${i+1}`);

            cl.addEventListener('click',()=>{
                // console.log(id);
                       localStorage.setItem('key',id);
            })
            
        }
        
    })
     
     

}

getMovies(nowplaying, pmovies, 5);
getMovies(upcoming, umovies, 10);
getMovies(trending, tmovies, 10);




const form = document.getElementById('form');
const search = document.getElementById('search-bar');
const heading = document.getElementById('searchplace');



form.addEventListener('submit', (e) => {

    document.getElementById('playingnow').remove();
    document.getElementById('upcoming').remove();
    document.getElementById('home').remove();
    document.getElementById('book').remove();
    document.getElementById('services').remove();
    document.getElementById('contact').remove();


    e.preventDefault();
    const searchTerm = search.value;
    heading.innerHTML = `<span>Results found on ${searchTerm} : </span>`;



    if (searchTerm) {
        getMovies(searchURL + searchTerm, tmovies, 20);
    }

})