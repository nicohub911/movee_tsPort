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
        console.log(data);
        return data.results;// return data  
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const idLocalData = localStorage.getItem("movieid"); // movie id
    const nameLocalData = localStorage.getItem("moviename"); // movie name
    // search the movies by name
    let datainfo = await datafetch(`https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${nameLocalData}&language=es-ES&page=1`);
    let movieinfo: Movie;
    for (let i = 0; i < datainfo.length; i++) {
        // search the specific movie by id (and name)
        if (datainfo[i].original_title == nameLocalData && datainfo[i].id == idLocalData) {
            movieinfo = datainfo[i];
            // define the categories
            let catGroup: string[] = [];
            for (const category of movieinfo.genre_ids) {
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
                        console.log("error");
                        break;
                }
            }
            // print the movie structure in the html
            if (container) {
                container.innerHTML = `
                    <h2>${movieinfo.original_title}</h2>
                    <div class="info_movie">
                        <aside>
                            <img src="https://image.tmdb.org/t/p/w500${movieinfo.poster_path}" alt="poster of the movie">
                        </aside>
                        <div>
                            <p>${movieinfo.overview}</p>
                            <ul>
                                <li>Release date: ${movieinfo.release_date}</li>
                                <li>Vote count: ${movieinfo.vote_count}</li>
                                <li>Categories: ${catGroup}</li>    
                            </ul>
                        </div>
                    </div>
                `;
            }
        }
    }
});