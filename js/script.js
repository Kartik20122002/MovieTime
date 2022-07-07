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
const Imbd_api = 'k_rldl3rxl';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';




const TAPI_URL = BASE_URL + '/movie/top_rated?' + API_KEY  +'&region=IN';
const main = document.getElementById('tmovies');


getMovies(TAPI_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){

    main.innerHTML='';

    
    for(let i = 0 ; i<8 ; i++){
        const {title , poster_path , overview , release_date} = data[i];
        const movieE1 = document.createElement('div');
        movieE1.classList.add('box');
        movieE1.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                    <a href="#topmovies" class="btn" id="morebtn" >More Info</a>
                </div>

        `
        main.appendChild(movieE1);
    }
     
}

const PAPI_URL = BASE_URL + '/movie/now_playing?' + API_KEY  +'&region=IN';
const main2 = document.getElementById('pmovies');


getMovies2(PAPI_URL);

function getMovies2(url){

    fetch(url).then(res => res.json()).then(data2 =>{
        console.log(data2.results);
        showMovies2(data2.results);
    })
}


function showMovies2(data2){

    main2.innerHTML='';

    
    for(let i = 0 ; i<3 ; i++){
        const {title , poster_path , overview ,release_date ,popularity,id} = data2[i];
       
        const movieE1 = document.createElement('div');
        movieE1.classList.add('box');
        movieE1.innerHTML = `
                 <img src="${IMG_URL+poster_path}" alt="${title}">
         
                 <div class="content">
                                <h3>${title}</h3>   <!-- movie-info-->
                                <p>${overview}</p>  
                                <div class="pop">Popularity :<span> ${popularity} </span></div>
                                <div class="price">Release Date : ${release_date}</div>
                 </div>
              <div class="it">
              <a href="#book" class="btn">Book Now</a>
              </div>

        `
        main2.appendChild(movieE1);
    }
     
}



const UAPI_URL = BASE_URL + '/movie/upcoming?' + API_KEY +'&region=IN';
const main3 = document.getElementById('umovies');

getMovies3(UAPI_URL);

function getMovies3(url){

    fetch(url).then(res => res.json()).then(data3 =>{
        console.log(data3.results);
        showMovies3(data3.results);
    })
}

function showMovies3(data3){

    main3.innerHTML='';

    
    for(let i = 0 ; i<4 ; i++){
        const {title , poster_path , overview , release_date} = data3[i];
        const movieE1 = document.createElement('div');
        movieE1.classList.add('box');
        movieE1.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="content">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                    <a href="#topmovies" id="rel"  id="morebtn"> Releasing on:<br>${release_date}</a>
                </div>

        `
        main3.appendChild(movieE1);
    }
     
}


testmovies(TEST);

function testmovies(url){

    fetch(url).then(res => res.json()).then(data4 =>{
        console.log(data4.Top250DataDetail);
    })
}


