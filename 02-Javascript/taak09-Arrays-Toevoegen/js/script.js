topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = [];

//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}

function kiesFilm(){
    var antw = prompt("Kies film voor plek 1") ;
   
    eigenTopFilms.push(topFilms[antw-1]);
    console.log(eigenTopFilms[0]);
    
    for(i = 0; i < eigenTopFilms.length; i++){
        document.querySelector(".eigen-film" + (i+1)).innerHTML = eigenTopFilms[i];
    }
}

