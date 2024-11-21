
/*
URL:

-Buscar por nombre
https://api.themoviedb.org/3/search/movie?api_key=tu_clave_api&query= (nombre) &language=es-ES&page=1
-Obtener detalles de una película
https://api.themoviedb.org/3/movie/ {movie_id} ?api_key=tu_clave_api&language=es-ES 
-Peliculas populares
https://api.themoviedb.org/3/movie/popular?api_key=tu_clave_api&language=es-ES&page= (numero de pagina)
-Obtener las películas de un género específico
https://api.themoviedb.org/3/discover/movie?api_key=tu_clave_api&with_genres= (id del genero) &language=es-ES&page=1
-Obtener las películas mejor valoradas
https://api.themoviedb.org/3/movie/top_rated?api_key=tu_clave_api&language=es-ES&page=1

clave: 276866c75165f669db11c444784102a8

Acceder a imagenes: https://image.tmdb.org/t/p/w500/ (direccion de la imagen)

Estructura de las cards HTML: 
<div>
    <span>Movie Name</span>
</div>
*/
const nameMovie_url = `https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${" movieNmae "}&language=es-ES&page=1`;
const infoMovie_url = `https://api.themoviedb.org/3/movie/${" idMovie "}?api_key=276866c75165f669db11c444784102a8&language=es-ES`;
const popularMovie_url = `https://api.themoviedb.org/3/movie/popular?api_key=276866c75165f669db11c444784102a8&language=es-ES&page=${" nºpage "}`;
const genreMovie_url = `https://api.themoviedb.org/3/discover/movie?api_key=276866c75165f669db11c444784102a8&with_genres=${" idgenero "}&language=es-ES&page=${" nºpage "}`;
const bestMovie_url = `https://api.themoviedb.org/3/movie/top_rated?api_key=276866c75165f669db11c444784102a8&language=es-ES&page=${" nºpage "}`;
let apiData: Movie[] = [];
interface Movie {
    original_title: string; // Title
    overview: string; // Sinopsis
    vote_average: number; // Stars
    poster_path: string; // IMG poster
    release_date: string; // :)
    vote_count: number; // :)
}

search();

async function fetchData(url: any) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results);
        return data.results;
    } catch (error) {
        console.error('Error:',
            error);
    }
}

async function search(searchText: string = "venom") {
    try {
        apiData = await fetchData(`https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${searchText}&language=es-ES&page=1`);
        const mainhome = document.getElementById("main_Home");
        if (mainhome) {
            for (const element of apiData) {
                mainhome.innerHTML += `
            <div>
                <span>${element.original_title}</span>
                <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="movie image">
            </div>
            `;
            }
        }
    }catch (error){
        console.log(`error:`, error)
    }
}