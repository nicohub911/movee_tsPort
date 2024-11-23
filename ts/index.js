"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const inputSearchNav = document.getElementById("Navsearch");
let apiData = [];
search();
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data.results);
            return data.results;
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
// Search movies by name //============================================================================================================================================//
function search() {
    return __awaiter(this, arguments, void 0, function* (searchText = "venom") {
        try { //
            apiData = yield fetchData(`https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${searchText}&language=es-ES&page=1`); //
            const mainhome = document.getElementById("main_Home"); //
            if (mainhome) { //
                mainhome.innerHTML = ""; //
                for (const element of apiData) { //
                    mainhome.innerHTML += `                                                                                                                                
            <div>
                <span>${element.original_title}</span>
                <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="movie image">
            </div>
            `; //
                } //
            } //
        }
        catch (error) { //
            console.log(`error:`, error); //
        } //
    });
} //
inputSearchNav === null || inputSearchNav === void 0 ? void 0 : inputSearchNav.addEventListener("change", () => {
    var _a;
    search((_a = inputSearchNav.value) === null || _a === void 0 ? void 0 : _a.toString()); //
}); //
//=====================================================================================================================================================================//
