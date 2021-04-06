topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];

document.querySelector(".film1-ranking").innerHTML = 1;
document.querySelector(".film1-naam").innerHTML = topFilms[0];
document.querySelector(".film2-ranking").innerHTML = 2;
document.querySelector(".film2-naam").innerHTML = topFilms[1];
document.querySelector(".film3-ranking").innerHTML = 3;
document.querySelector(".film3-naam").innerHTML = topFilms[2];
document.querySelector(".film4-ranking").innerHTML = 4;
document.querySelector(".film4-naam").innerHTML = topFilms[3];
document.querySelector(".film5-ranking").innerHTML = 5;
document.querySelector(".film5-naam").innerHTML = topFilms[4];

function moveup(up){
    console.log(up);
    
    if(up==1){
        alert ("Je kunt niet verder omhoog");
    }
    
    var test = document.querySelector(".film"+ up +"-naam").innerHTML
    console.log(test);
    document.querySelector(".film"+ (up - 1) +"-naam").innerHTML = topFilms[up-1];

}

function movedown(down){
    console.log(down);
    
    if(down==5){
        alert ("Je kunt niet verder omlaag");
    }
    
    var test = document.querySelector(".film"+ down +"-naam").innerHTML
    console.log(test);
    document.querySelector(".film"+ (down - 1) +"-naam").innerHTML = topFilms[down-1];
}
