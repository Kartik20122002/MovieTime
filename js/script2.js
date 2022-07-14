const API_KEY = 'api_key=e272f317f8df98d65d0f955c6dc2b70d';
const Imbd_api = 'k_rldl3rxl';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
let movieid = localStorage.getItem('key');


if(!movieid) movieid=616037;

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
    const {title,overview,tagline ,release_date,original_title,poster_path,runtime,genres,backdrop_path} = movieinfo

    let sum="" ;
    let s = " ";
genres.forEach(myFunction);

function myFunction(item) {
  console.log(item.name);
  sum+=`${item.name}${s}${s} `
}

if(!sum) sum = "N/A"

let run = runtime + " mins";
if(!runtime) run = "N/A";

let name=title;

if(original_title && original_title!=title) name+=` (${original_title})`;
    
    let chane = document.body;
    chane.innerHTML = `

    <div class="bask" style="background-image: url('${IMG_URL+backdrop_path}');">

    
    <div class="container" id="container">
    
     <div class="poster" style="background-image: url('${IMG_URL+poster_path}');">
     </div>
     
    <div class="info">
        <div class="movie-title">
        ${name}
        </div>

        <div class="movie-tagline">
        ${tagline}
        </div>

        <div class="movie-detail">
            <div class="set">
                <label>Release Date</label>
                <span>${release_date}</span>
            </div>
            <div class="set">
                <label>Running Time</label>
                <span>${run}</span>
            </div>
            <div class="set">
                <label>Genre</label>
                <span>${sum}</span>
            </div>
        </div>

        <div class="movie-description">
        ${overview}
        </div>
        
        <div class="movie-cast">
            <div class="header">Cast and Crew</div>
            <div class="list">
                <div class="cast">
                    <img src="/Images and Videos/umovie2.jpg" alt="cast">
                    <label>Put Cast Name Here</label>
                </div>
                <div class="cast">
                    <img src="/Images and Videos/umovie2.jpg" alt="cast">
                    <label>Put Cast Name Here</label>
                </div>
                <div class="cast">
                    <img src="/Images and Videos/umovie2.jpg" alt="cast">
                    <label>Put Cast Name Here</label>
                </div>
                <div class="cast">
                    <img src="/Images and Videos/umovie2.jpg" alt="cast">
                    <label>Put Cast Name Here</label>
                </div>
                <div class="cast">
                    <img src="/Images and Videos/umovie2.jpg" alt="cast">
                    <label>Put Cast Name Here</label>
                </div>
                <div class="cast">
                    <img src="/Images and Videos/umovie2.jpg" alt="cast">
                    <label>Put Cast Name Here</label>
                </div>
            </div>
        </div>
     </div>

    </div>
          

</div>

    `
}










window.onbeforeunload = closingCode;
function closingCode(){
    localStorage.removeItem('key');
}


re.addEventListener('click',()=>{
    localStorage.removeItem('key');
})