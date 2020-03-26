


let ima = document.querySelector("#Roue");
let totalWin= document.querySelector("#totalGagne");
let Gagne = document.querySelector("#SommeGagne");
let Mise = document.querySelector("#SommeMise");
let btn = document.querySelector("#boutton");

function Rouetourne()
{
    let deg = Math.floor(Math.random() * 5000);
    argentAleatoire(deg)
    ima.style.transition= "all 5s ease-out";
    ima.style.transform = "rotate("+ deg + "deg)";
}
Rouetourne();


