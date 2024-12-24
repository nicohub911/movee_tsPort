
const inputSearchNav = document.getElementById("Navsearch")as HTMLInputElement;
let apiData: Movie[] = [];
interface Movie {// structure of api data.
    id: number;             // id :)
    original_title: string; // Title
    overview: string;       // Sinopsis
    vote_average: number;   // Stars
    poster_path: string;    // IMG poster
    release_date: string;   // ;)
    vote_count: number;     // ;)
}

window.addEventListener("DOMContentLoaded",async()=>{
    if (localStorage.getItem("search")) {
        search(localStorage.getItem("search")?.toString());
        localStorage.removeItem("search");
    }
    apiData = await fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=276866c75165f669db11c444784102a8&language=es-ES&page=1`);
    PrintDataOnHome(apiData);// print default (popular movies) movies in the main (body)
    // take the specific category id and send it to a function
    const myList = document.getElementById('myList') as HTMLUListElement;
    const listItems = myList.querySelectorAll('li');
    for (const item of listItems) {
        item.addEventListener("click",()=>{
            ChoseCategory(item.dataset.catid?.toString());
        });
    }
    // save te id and the name of the movie in the local storage when is clicked
    const cards = document.querySelectorAll('.card_movie')as NodeListOf<HTMLElement>;
    for (const card of cards) {
        card.addEventListener("click",()=>{
            console.log(card.dataset.movieid as string);
            localStorage.setItem(`movieid`, card.dataset.movieid as string)
            localStorage.setItem(`moviename`, card.dataset.moviename as string)
        });
    }
});
// fetch function to get api data ==========//  
async function fetchData(url: any) {        //
    try {                                   //
        const response = await fetch(url);  //
        const data = await response.json(); //
        return data.results;// return data  //
    } catch (error) {                       //
        console.error('Error:',             //
            error);                         //
    }                                       //
}                                           //
//==========================================//
// Search movies by name ==============================================================================================================================================//
async function search(searchText: string = "venom") {                                                                                                                  //
    try {                                                                                                                                                              //
        apiData = await fetchData(`https://api.themoviedb.org/3/search/movie?api_key=276866c75165f669db11c444784102a8&query=${searchText}&language=es-ES&page=1`);     //
        console.log(apiData);
        PrintDataOnHome(apiData);                                                                                                                                      //
    }catch (error){                                                                                                                                                    //
        console.log(`error:`, error)                                                                                                                                   //
    }                                                                                                                                                                  //
}                                                                                                                                                                      //
//=====================================================================================================================================================================//
// get the value of the input search (nav) ============// 
inputSearchNav?.addEventListener("change",()=>{        //
    search(inputSearchNav.value?.toString());          //
});                                                    //
//=====================================================//
// print the data in the main (body) =================================================================//
function PrintDataOnHome(data:any) {                                                                  //
    const mainhome = document.getElementById("main_Home");                                            //
    if (mainhome) {                                                                                   //
        mainhome.innerHTML = "";                                                                      //
        for (const element of data) {                                                                 //
            mainhome.innerHTML += `
        <a href="./html/movieInfo.html" class="card_movie" data-movieid="${element.id}" data-moviename="${element.original_title}">
            <span>${element.original_title}</span>
            <img src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="this movie dont have a image">
        </a>
        `;                                                                                            //
        }                                                                                             //
    }                                                                                                 //
}                                                                                                     //
//====================================================================================================//
//Recive the category id and send the link (with the id) to print the movies ============================================================================================//
async function ChoseCategory(category:any) {                                                                                                                             //
    try {                                                                                                                                                                //
        apiData = await fetchData(`https://api.themoviedb.org/3/discover/movie?api_key=276866c75165f669db11c444784102a8&with_genres=${category}&language=es-ES&page=1`);       //
        PrintDataOnHome(apiData);                                                                                                                                        //
    } catch (error) {                                                                                                                                                    //
        console.log(error);                                                                                                                                              //
    }                                                                                                                                                                    //
}                                                                                                                                                                        //
//=======================================================================================================================================================================//

