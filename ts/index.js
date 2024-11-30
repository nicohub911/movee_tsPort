"use strict";
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
<li></li>
accion = 28
ciencia ficcion = 878
suspenso = 53
terror = 27
aventura = 12
comedia = 35
romance = 10749
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inputSearchNav = document.getElementById("Navsearch");
let apiData = [];
window.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    apiData = yield fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=276866c75165f669db11c444784102a8&language=es-ES&page=1`);
    PrintDataOnHome(apiData); // print default (popular movies) movies in the main (body)
    // take the specific category id and send it to a function
    const myList = document.getElementById('myList');
    const listItems = myList.querySelectorAll('li');
    for (const item of listItems) {
        item.addEventListener("click", () => {
            var _a;
            ChoseCategory((_a = item.dataset.catid) === null || _a === void 0 ? void 0 : _a.toString());
        });
    }
    // save te id and the name of the movie in the local storage when is clicked
    const cards = document.querySelectorAll('.card_movie');
    for (const card of cards) {
        card.addEventListener("click", () => {
            console.log(card.dataset.movieid);
            localStorage.setItem(`movieid`, card.dataset.movieid);
            localStorage.setItem(`moviename`, card.dataset.moviename);
        });
    }
}));
// fetch function to get api data ==========//  
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try { //
            const response = yield fetch(url); //
            const data = yield response.json(); //
            return data.results; // return data  //
        }
        catch (error) { //
            console.error('Error:', //
            error); //
        } //
    });
} //
//==========================================//
// Search movies by name ==============================================================================================================================================//
function search() {
    return __awaiter(this, arguments, void 0, function* (searchText = "venom") {
        try { //
            apiData = yield fetchData(`https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${searchText}&language=es-ES&page=1`); //
            console.log(apiData);
            PrintDataOnHome(apiData); //
        }
        catch (error) { //
            console.log(`error:`, error); //
        } //
    });
} //
//=====================================================================================================================================================================//
// get the value of the input search (nav) ============// 
inputSearchNav === null || inputSearchNav === void 0 ? void 0 : inputSearchNav.addEventListener("change", () => {
    var _a;
    search((_a = inputSearchNav.value) === null || _a === void 0 ? void 0 : _a.toString()); //
}); //
//=====================================================//
// print the data in the main (body) =================================================================//
function PrintDataOnHome(data) {
    const mainhome = document.getElementById("main_Home"); //
    if (mainhome) { //
        mainhome.innerHTML = ""; //
        for (const element of data) { //
            mainhome.innerHTML += `
        <a href="./html/movieInfo.html" class="card_movie" data-movieid="${element.id}" data-moviename="${element.original_title}">
            <span>${element.original_title}</span>
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="this movie dont have a image">
        </a>
        `; //
        } //
    } //
} //
//====================================================================================================//
//Recive the category id and send the link (with the id) to print the movies ============================================================================================//
function ChoseCategory(category) {
    return __awaiter(this, void 0, void 0, function* () {
        try { //
            apiData = yield fetchData(`https://api.themoviedb.org/3/discover/movie?api_key=276866c75165f669db11c444784102a8&with_genres=${category}&language=es-ES&page=1`); //
            PrintDataOnHome(apiData); //
        }
        catch (error) { //
            console.log(error); //
        } //
    });
} //
//=======================================================================================================================================================================//
