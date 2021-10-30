/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.


    1. chiedere all'utente di scegliere pari o dispari
    2. chiedere all'utente numero 
    3. genero un numero random da 1 a 5 per il computer
    4  sommo i numeri
       4.1 verificare che la somma sia pari o dispari
    5. stampare il risultato
*/


let pariOdispari = prompt(" segli pari o dispari?"); 
console.log("la tua scelta: ", pariOdispari);

let numeroScelto = parseInt(prompt("inserisci un numero da 1 a 5"));


function numeroRandom()  {
    let numeroRandom = Math.floor(Math.random() * 5 + 1);
    console.log(numeroRandom);
    return numeroRandom;
}

let somma = numeroScelto + numeroRandom();
console.log(somma);

function pari(numero){

    let risultato = "dispari";
    if ( numero % 2 == 0){
        risultato = "pari";
        console.log("il numero risultano è" + numero);
    }

    return risultato;
}

if (pari(somma) === pariOdispari){

    alert("hai vinto");
} else {
    
    alert("hai perso");
}

 



