let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

localStorage.clear();

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
                       localStorage.setItem('key1',id);
            })
            
        }
        
    })
     
     

}

getMovies(nowplaying, pmovies, 4);
getMovies(upcoming, umovies, 8);
getMovies(trending, tmovies, 8);




const form = document.getElementById('form');
const search = document.getElementById('search-bar');
const heading = document.getElementById('searchplace');



form.addEventListener('submit', (e) => {

    document.getElementById('playingnow').remove();
    document.getElementById('upcoming').remove();
    document.getElementById('home').remove();
    document.getElementById('services').remove();
    document.getElementById('contact').remove();


    e.preventDefault();
    const searchTerm = search.value;
    heading.innerHTML = `<span>Results found on ${searchTerm} : </span>`;

    console.log(searchTerm);

    if (searchTerm) {
        getMovies(searchURL + searchTerm, tmovies, 20);
    }

})

// *********************************************************************************************************************

const api = 'e272f317f8df98d65d0f955c6dc2b70d';
let forml = document.getElementById('forml');

// 
let userdata= {
  unique_key : "",
  username : "Guest"
};

const get_login = async (username,password,token)=>{
  const options2 = {
    method: 'POST'
  };

  await fetch(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=e272f317f8df98d65d0f955c6dc2b70d&username=${username}&password=${password}&request_token=${token}`, options2)
  const res1 = await fetch(`https://api.themoviedb.org/3/authentication/session/new?api_key=e272f317f8df98d65d0f955c6dc2b70d&request_token=${token}`)

  const data = await res1.json();

  if(data.success) return data.session_id;
  else{ 
    userdata.username = "Guest";
    return "";
  }
  }


const get_token = async ()=>{
  const res = await fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=e272f317f8df98d65d0f955c6dc2b70d');
  const data = await res.json();
  return data.request_token;
    }

const signin = async ()=>{

    let token = await get_token();
    let user = document.getElementById('user1');
    let pass = document.getElementById('pass1');
  
  
      let username = user.value;
      let password = pass.value;
      
      userdata.username = username;
    
    let id = await get_login(username,password,token);
    return id;
    
  }

  

  forml.addEventListener('submit',  async (e) => {  //login form;
    e.preventDefault();
    let session_id = await signin();
    userdata.unique_key=session_id;
  })

  const IsSign = ()=>{
    console.log(userdata);
  }

  const signuppage = (token)=>{
    let link = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://127.0.0.1:5500/tjr.html`;
    location = link;
  }
  
  const signup = async ()=>{
      let token = await get_token();
      signuppage(token);
    }

  const signout = async () =>{
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: 'OAuth oauth_consumer_key="", oauth_nonce="xJjDoJoHvF9SVLRULXfky7k9qZtsRtBO", oauth_signature="zWKBljf%2BTkqhmJQOUKJHxchmXYI%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1659257967", oauth_token="", oauth_version="1.0"'
      }
    };

    
    fetch(`https://api.themoviedb.org/3/authentication/session?api_key=${api}&session_id=${userdata.unique_key}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
    userdata.unique_key = "";
    userdata.username = "Guest";

  }