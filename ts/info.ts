/*
    genre_ids : arrays con los id de las categorias [].
    
*/
const container = document.getElementById("container");
interface Movie {// structure of api data.
    id: number;             // id :)
    original_title: string; // Title
    overview: string;       // Sinopsis
    vote_average: number;   // Stars
    poster_path: string;    // IMG poster
    release_date: string;   // ;)
    vote_count: number;     // ;)
    genre_ids: number[];
}
// fetch to api
async function datafetch(url: any) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;// return data  
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    let specificDataMovie = await specificDataDealer();
    // define the categories
    let catGroup: string[] = [];
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
    const starButtons = document.querySelectorAll(".star_button") as NodeListOf<HTMLInputElement>;
    for (let a = 0; a < starButtons.length; a++) {
        starButtons[a].addEventListener("click", () => {
            putStars(starButtons[a].dataset.btid?.toString());
            if (specificDataMovie) {
                localStorage.setItem(`${specificDataMovie.id}`, `${starButtons[a].dataset.btid?.toString()}`)
            } else {
                console.error("error whit set the stars");
            }

        });
    }
});
// function to put te calification of the movie
function putStars(dataId: any) {
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
async function specificDataDealer(): Promise<Movie | undefined> {
    const idLocalData = localStorage.getItem("movieid"); // movie id
    const nameLocalData = localStorage.getItem("moviename"); // movie name
    let datainfo = await datafetch(`https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${nameLocalData}&language=es-ES&page=1`);
    let movieinfo: Movie;
    for (let i = 0; i < datainfo.length; i++) {
        if (datainfo[i].original_title == nameLocalData && datainfo[i].id == idLocalData) {
            movieinfo = datainfo[i];
            return movieinfo;
        } else {
            console.error("movie not found")
            return undefined;
        }
    }
}