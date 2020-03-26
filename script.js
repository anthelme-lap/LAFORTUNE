


let ima = document.querySelector("#Roue");
let totalWin= document.querySelector("#totalGagne");
let Gagne = document.querySelector("#SommeGagne");
let Mise = document.querySelector("#SommeMise");
let btn = document.querySelector("#boutton");
btn.addEventListener("click", function(){
    Rouetourne();
})
// function Rouetourne()
// {
//     let deg = Math.floor(Math.random() * 5000);
    
//     ima.style.transition= "all 5s ease-out";
//     ima.style.transform = "rotate("+ deg + "deg)";
//     console.log(deg)
// }
// Rouetourne();
function Rouetourne(){
    let deg = aleatoire(1000, 4000);
    ima.style.transition= "all 5s ease-out";
    ima.style.transform = "rotate("+ deg + "deg)";
    console.log(deg)
}
function aleatoire(min, max){
    return parseInt(Math.random()*(min+max-1)+min)
}
Rouetourne()

