let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
})
 
searchBtn.addEventListener('click' , ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click' , ()=>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click' , ()=>{
    loginForm.classList.remove('active');
})


function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}


const API_KEY = 'api_key=e272f317f8df98d65d0f955c6dc2b70d';
const BASE_URL = 'https://api.themoviedb.org/3';
const PAPI_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('umovies');


getMovies(PAPI_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        showMovies(data.results);
    })
}




function showMovies(data){

    main.innerHTML='';

    
    data.forEach(movie =>{
        const {title , poster_path , overview , release_date} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('box');
        movieE1.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                    <a href="#topmovies" class="btn">Rate Now</a>
                </div>

        `
        main.appendChild(movieE1);
    })
     
}


