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
    let datainfo = datafetch(`https://api.themoviedb.org/3/search/movie?api_key=tu_clave_api&query=${""}&language=es-ES&page=1`);
    let movieinfo;
    let idLocalData = localStorage.getItem("movieid");
    let nameLocalData = localStorage.getItem("moviename");
    if (container) {
        container.innerHTML = `
            <h2>${""}</h2>
            <div class="info_movie">
                <aside>
                    <img src="${""}" alt="">
                </aside>
                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                    </ul>
                </div>
            </div>
        `;
    }
}));
