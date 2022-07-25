
(function(d, s, id) {
    var js, stags = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js";
    stags.parentNode.insertBefore(js, stags);
})(document, "script", "imdb-rating-api");


const API_KEY = 'api_key=e272f317f8df98d65d0f955c6dc2b70d';
const Imbd_api = 'k_rldl3rxl';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
let movieid = localStorage.getItem('key1');

if(!movieid) movieid=438148;

console.log(movieid);

let infoURL  =  'https://api.themoviedb.org/3/movie/' + movieid + '?api_key=e272f317f8df98d65d0f955c6dc2b70d&language=en-US';

getMovies(infoURL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data4 =>{
        // console.log(data4);
        show(data4);
    })
}

function show(data){
    const {title,overview,release_date,runtime,poster_path,imdb_id,id} = data;

    let overview1 = overview;
    let runtime1 = runtime;
    let poster_path1 = poster_path;
    let id1 = id;

    if(!id1) id1 = 550;
    if(!overview1) overview1 = 'No Overview Avialabele.'
    if(!runtime1) runtime1 = 'N/A';
    else runtime1 = runtime + ' mins';

    let main = document.querySelector('#change');


    const trailer =`https://imdb-api.com/en/API/YouTubeTrailer/k_rldl3rxl/${imdb_id}`;

    
    getTrailer(trailer);
    function getTrailer(url){
        
        fetch(url).then(res => res.json()).then(data5 =>{
            
        let trailer_url = data5.videoId;
        main.innerHTML=`
        <div class="info">
            
        <div class="pri-info">

            <div class="poster"><img src="${IMG_URL+ poster_path1}" alt="${title}"></div>
            
             <div class="ele">
            <div class="title">${title}</div>

            <div class="details">

                <div class="runtime">Runtime : ${runtime1}</div>
                <div class="imbd-rating">

                    <span class="imdbRatingPlugin" data-user="ur117132477" data-title="${imdb_id}" data-style="p1">
                    <a href="https://www.imdb.com/title/${imdb_id}/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt=""/></a>
                    </span>

                </div>
                <div class="release">Release Date : ${release_date} </div>

            </div>

        </div>
        </div>
            <div class="sec-info">

            <div class="overview">

                <h1>Overview :</h1>
                <p>${overview1}</p>
            </div>
            </div>


    </div>

    <div class="trailer">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer_url}?loop=1" 
        title="${title}" frameborder="0"
        allowfullscreen></iframe>
    </div>
        

</div>
    `
    })
}


  
// https://www.youtube.com/embed/BdJKm16Co6M

    

}

window.onbeforeunload = closingCode;
function closingCode(){
    localStorage.removeItem('key');
}