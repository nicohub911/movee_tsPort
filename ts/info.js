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
    genre_ids : arrays con los id de las categorias [].
    
*/
const container = document.getElementById("container");
// fetch to api
function datafetch(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            return data.results; // return data  
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    let specificDataMovie = yield specificDataDealer();
    // define the categories
    let catGroup = [];
    if (specificDataMovie != undefined) {
        // search and put the opinion of the movie (if exist (stars))
        setTimeout(() => {
            let savedStars = localStorage.getItem(`${specificDataMovie.id}`);
            putStars(savedStars);
        }, 500);
        // define the categories
        for (const category of specificDataMovie.genre_ids) {
            switch (category) {
                case 12:
                    catGroup.push("aventura");
                    break;
                case 27:
                    catGroup.push("terror");
                    break;
                case 28:
                    catGroup.push("accion");
                    break;
                case 35:
                    catGroup.push("comedia");
                    break;
                case 53:
                    catGroup.push("suspenso");
                    break;
                case 878:
                    catGroup.push("ciencia ficcion");
                    break;
                case 10749:
                    catGroup.push("romance");
                    break;
                default:
                    console.error("dont fin the category (its provably normal)");
                    break;
            }
        }
        // print the movie structure in the html
        if (container) {
            container.innerHTML = `
                    <header>
                        <img src="https://image.tmdb.org/t/p/w500${specificDataMovie.poster_path}" alt="poster of the movie">
                        <h2>${specificDataMovie.original_title}</h2>
                    </header>
                    <div class="info_movie">
                        <h3>Synopsis</h3>
                        <div>${catGroup}</div>
                        <p>${specificDataMovie.overview}</p>
                        <ul>
                            <li>Release date: ${specificDataMovie.release_date}</li>
                            <li>Vote count: ${specificDataMovie.vote_count}</li>    
                        </ul>
                    </div>
                    <aside>
                        <h3>Your opinion</h3>
                        <div>
                            <input class="star_button" id="star1" data-Btid="1" type="button" value="">
                            <input class="star_button" id="star2" data-Btid="2" type="button" value="">
                            <input class="star_button" id="star3" data-Btid="3" type="button" value="">
                            <input class="star_button" id="star4" data-Btid="4" type="button" value="">
                            <input class="star_button" id="star5" data-Btid="5" type="button" value="">
                        </div>
                    </aside>
                    `;
        }
    }
    // functionality of the stars
    const starButtons = document.querySelectorAll(".star_button");
    for (let a = 0; a < starButtons.length; a++) {
        starButtons[a].addEventListener("click", () => {
            var _a, _b;
            putStars((_a = starButtons[a].dataset.btid) === null || _a === void 0 ? void 0 : _a.toString());
            if (specificDataMovie) {
                localStorage.setItem(`${specificDataMovie.id}`, `${(_b = starButtons[a].dataset.btid) === null || _b === void 0 ? void 0 : _b.toString()}`);
            }
            else {
                console.error("error whit set the stars");
            }
        });
    }
}));
// function to put te calification of the movie
function putStars(dataId) {
    const star_btn1 = document.getElementById("star1");
    const star_btn2 = document.getElementById("star2");
    const star_btn3 = document.getElementById("star3");
    const star_btn4 = document.getElementById("star4");
    const star_btn5 = document.getElementById("star5");
    switch (dataId) {
        case "1":
            if (star_btn1 && star_btn2 && star_btn3 && star_btn4 && star_btn5) {
                star_btn1.style.background = "#edf023";
                star_btn2.style.background = "#fff";
                star_btn3.style.background = "#fff";
                star_btn4.style.background = "#fff";
                star_btn5.style.background = "#fff";
            }
            break;
        case "2":
            if (star_btn1 && star_btn2 && star_btn3 && star_btn4 && star_btn5) {
                star_btn1.style.background = "#edf023";
                star_btn2.style.background = "#edf023";
                star_btn3.style.background = "#fff";
                star_btn4.style.background = "#fff";
                star_btn5.style.background = "#fff";
            }
            break;
        case "3":
            if (star_btn1 && star_btn2 && star_btn3 && star_btn4 && star_btn5) {
                star_btn1.style.background = "#edf023";
                star_btn2.style.background = "#edf023";
                star_btn3.style.background = "#edf023";
                star_btn4.style.background = "#fff";
                star_btn5.style.background = "#fff";
            }
            break;
        case "4":
            if (star_btn1 && star_btn2 && star_btn3 && star_btn4 && star_btn5) {
                star_btn1.style.background = "#edf023";
                star_btn2.style.background = "#edf023";
                star_btn3.style.background = "#edf023";
                star_btn4.style.background = "#edf023";
                star_btn5.style.background = "#fff";
            }
            break;
        case "5":
            if (star_btn1 && star_btn2 && star_btn3 && star_btn4 && star_btn5) {
                star_btn1.style.background = "#edf023";
                star_btn2.style.background = "#edf023";
                star_btn3.style.background = "#edf023";
                star_btn4.style.background = "#edf023";
                star_btn5.style.background = "#edf023";
            }
            break;
        default:
            if (star_btn1 && star_btn2 && star_btn3 && star_btn4 && star_btn5) {
                star_btn1.style.background = "#fff";
                star_btn2.style.background = "#fff";
                star_btn3.style.background = "#fff";
                star_btn4.style.background = "#fff";
                star_btn5.style.background = "#fff";
            }
            break;
    }
}
// function to return the specific data of the movie
function specificDataDealer() {
    return __awaiter(this, void 0, void 0, function* () {
        const idLocalData = localStorage.getItem("movieid"); // movie id
        const nameLocalData = localStorage.getItem("moviename"); // movie name
        let datainfo = yield datafetch(`https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${nameLocalData}&language=es-ES&page=1`);
        let movieinfo;
        for (let i = 0; i < datainfo.length; i++) {
            if (datainfo[i].original_title == nameLocalData && datainfo[i].id == idLocalData) {
                movieinfo = datainfo[i];
                return movieinfo;
            }
            else {
                console.error("movie not found");
                return undefined;
            }
        }
    });
}
// save the search and redirect to index
const inputSearch = document.getElementById("Navsearch");
inputSearch === null || inputSearch === void 0 ? void 0 : inputSearch.addEventListener("change", () => {
    var _a;
    localStorage.setItem("search", (_a = inputSearch.value) === null || _a === void 0 ? void 0 : _a.toString());
    window.location.href = "../index.html";
});
const myListCat = document.getElementById('myList');
const listItemsCat = myListCat.querySelectorAll('li');
for (const item of listItemsCat) {
    item.addEventListener("click", () => {
        var _a, _b;
        if ((_a = item.dataset.catid) === null || _a === void 0 ? void 0 : _a.toString()) {
            localStorage.setItem("categoryInfo", (_b = item.dataset.catid) === null || _b === void 0 ? void 0 : _b.toString());
            window.location.href = "../index.html";
        }
    });
}
