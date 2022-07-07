const API_KEY = 'api_key=e272f317f8df98d65d0f955c6dc2b70d';
const Imbd_api = 'k_rldl3rxl';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
let movieid = localStorage.getItem('key');



let re = document.getElementById('me');

let infoURL  =  'https://api.themoviedb.org/3/movie/' + movieid + '?api_key=e272f317f8df98d65d0f955c6dc2b70d&language=en-US';

getMovies(infoURL);

function getMovies(url){


    fetch(url).then(res => res.json()).then(data4 =>{
        console.log(data4);
        show(data4);
    })
}

function show(movieinfo){
    const {title , overview ,release_date} = movieinfo
    
    let chane = document.getElementById('container');
    chane.innerHTML = `
    Title : ${title}
    <br>
    Overview : ${overview}
    <br>
    Release Date : ${release_date}
    `
}

window.onbeforeunload = closingCode;
function closingCode(){
    localStorage.removeItem('key');
}


re.addEventListener('click',()=>{
    localStorage.removeItem('key');
})