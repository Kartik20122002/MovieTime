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
        showMovies(data.results);
    })
}

let top1;
let top2;
let top3;
let top4;
let top5;
let top6;
let top7;
let top8;

let c;

function showMovies(data){
    c = data;
    main.innerHTML='';  /*********************TOP MOVIES***************************/

    
    for(let i = 0 ; i<8 ; i++){     
        const {title , poster_path , overview , release_date} = data[i];
        const movieE1 = document.createElement('div');
        movieE1.classList.add('box');
        movieE1.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="content" id="top${i+1}">
                    <h3>${title}</h3>
                    <p>${overview}</p>
                    <a href="page2.html" class="btn">More Info</a>
                </div>

        `
        main.appendChild(movieE1);
    }
    top1 = document.getElementById('top1');
    top2 = document.getElementById('top2');
    top3 = document.getElementById('top3');
    top4 = document.getElementById('top4');
    top5 = document.getElementById('top5');
    top6 = document.getElementById('top6');
    top7 = document.getElementById('top7');
    top8 = document.getElementById('top8');

    top1.addEventListener('click',()=>{
        localStorage.setItem('key',c[0].id)
    })
     
    top2.addEventListener('click',()=>{
        localStorage.setItem('key',c[1].id)
    })
    top3.addEventListener('click',()=>{
        localStorage.setItem('key',c[2].id)
    })
    top4.addEventListener('click',()=>{
        localStorage.setItem('key',c[3].id)
    })
    top5.addEventListener('click',()=>{
        localStorage.setItem('key',c[4].id)
    })
    top6.addEventListener('click',()=>{
        localStorage.setItem('key',c[5].id)
    })
    top7.addEventListener('click',()=>{
        localStorage.setItem('key',c[6].id)
    })
    top8.addEventListener('click',()=>{
        localStorage.setItem('key',c[7].id)
    })
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

function getMovies3(url){  /*******************UPCOMING MOVIES***************************/

    fetch(url).then(res => res.json()).then(data3 =>{
        console.log(data3.results);
        showMovies3(data3.results);
    })
}



let please1;
let please2;
let please3;
let please4;
 
let v;

function showMovies3(data3){

    main3.innerHTML='';
    v= data3;
    
    for(let i = 0 ; i<4 ; i++){
        const {title , poster_path , overview , release_date,id} = data3[i];
       
        const movieE1 = document.createElement('div');
        movieE1.classList.add('box');
        
        movieE1.innerHTML = `
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="content" id=content${i+1}>
                    <h3>${title}</h3>
                    <p>${overview}</p>
                    <a href="page2.html"  class="btn">More Info</a>
                </div>

        `

        
    

        main3.appendChild(movieE1);
    }
        please1 = document.querySelector('#content1 .btn');
        please2 = document.querySelector('#content2 .btn');
        please3 = document.querySelector('#content3 .btn');
        please4 = document.querySelector('#content4 .btn');

    please1.addEventListener('click',()=>{
        localStorage.setItem('key',v[0].id)
    })
    
    please2.addEventListener('click',()=>{
        localStorage.setItem('key',v[1].id)
    })
    please3.addEventListener('click',()=>{
        localStorage.setItem('key',v[2].id)
    })
    please4.addEventListener('click',()=>{
        localStorage.setItem('key',v[3].id)
    })
   
}




