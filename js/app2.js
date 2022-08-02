const API_KEY = 'api_key=e272f317f8df98d65d0f955c6dc2b70d';
const Imbd_api = 'k_rldl3rxl';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
let movieid = localStorage.getItem('key1');

if(!movieid) movieid=438148;

console.log(movieid);

let infoURL  =  'https://api.themoviedb.org/3/movie/' + movieid + '?api_key=e272f317f8df98d65d0f955c6dc2b70d&language=en-US';

getMovies(infoURL);

async function getvideo(API_KEY,id){
    let res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
    let data = await res.json();
    return data;
}

function getMovies(url){
    fetch(url).then(res => res.json()).then(data4 =>{
        // console.log(data4);
        show(data4);
    })
}

async function show(data){
    console.log(data);
    const {genres,tagline,original_title,vote_average,title,overview,release_date,runtime,poster_path,imdb_id,id} = data;

    let title1 = title;
    let overview1 = overview;
    let runtime1 = runtime;
    let poster_path1 = poster_path;
    let id1 = id;

    let video = await getvideo('e272f317f8df98d65d0f955c6dc2b70d',id).then(res=>{ console.log(res);
         if(res.results.length){
        for(let i=0 ; i < res.results.length ; i++){
              if(res.results[i].type == "Trailer") return res.results[i].key;
        }
     return res.results[0].key
    }
    else return "NO TRAILER AVAILABLE";
    });
    

    if(!id1) id1 = 550;
    if(original_title != title) title1 = `${title} (${original_title})`;
    if(!overview1) overview1 = 'No Overview Avialabele.'
    if(!runtime1) runtime1 = 'N/A';
    else runtime1 = runtime + ' mins';

    let main = document.querySelector('#change');
    
    // swPhyd0g6K8

           
     fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=e272f317f8df98d65d0f955c6dc2b70d`).then(res=>res.json()).then(data6 =>{
    

    if(data6.results.IN) console.log(data6.results.IN.flatrate);
    let provider;
    let provider_logo;
    if(data6.results.IN) provider = data6.results.IN.flatrate[0].provider_name;
    else provider = 'None';
    if(data6.results.IN) provider_logo = data6.results.IN.flatrate[0].logo_path;
            
        main.innerHTML=`
        <div class="info">
            
        <div class="pri-info">

            <div class="poster"><img src="${IMG_URL+ poster_path1}" alt="${title1}"></div>
            
             <div class="ele">
            <div class="title">${title1}</div>

            <div class="tagline">${tagline}</div>

            <div class="details">

                <div class="runtime">Runtime : ${runtime1}</div>
                <div class="imbd-rating">Average Votes : ${vote_average}</div>
                <div class="release">Release Date : ${release_date} </div>
                <div class="release">Watch Provider :
                <div class="provide">
                 <img src="${IMG_URL+ provider_logo}" alt=""> ${provider} 
                 </div>
                </div>

                

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
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video}?loop=1" 
        title="${title}" frameborder="0"
        allowfullscreen></iframe>
    </div>
        

</div>
    `

})
    


  
// https://www.youtube.com/embed/BdJKm16Co6M

    

}

window.onbeforeunload = closingCode;
function closingCode(){
    localStorage.removeItem('key');
}