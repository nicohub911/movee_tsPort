
const container = document.getElementById("container");
interface Movie {// structure of api data.
    id: number;             // id :)
    original_title: string; // Title
    overview: string;       // Sinopsis
    vote_average: number;   // Stars
    poster_path: string;    // IMG poster
    release_date: string;   // ;)
    vote_count: number;     // ;)
}
// fetch to api
async function datafetch(url: any) {        
    try {                                   
        const response = await fetch(url);  
        const data = await response.json(); 
        return data.results;// return data  
    } catch (error) {                       
        console.error('Error:',error);                         
    }                                       
}

document.addEventListener("DOMContentLoaded", async()=>{
    let datainfo =  datafetch(`https://api.themoviedb.org/3/search/movie?api_key=tu_clave_api&query=${""}&language=es-ES&page=1`);
    let movieinfo:Movie;
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
});