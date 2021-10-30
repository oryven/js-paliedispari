 /* Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma.
    Dare l’output relativo. 
*/


// 1. chiedere all'utente di scrivere una parola => promnt
// 2. invertire l'ordine delle lettere per capire sa la parola è palindroma
// 3. stampare il risultato


let parola = prompt("scrivi una parola");


if (controlloPalindroma(parola) == parola){
    console.log("la tua parola è palindrma");
}else {
    console.log("la tua parola non è palindroma");
}

function controlloPalindroma(parolaInserita){

    let parolaInvertita = "";

    for (let i = parolaInserita.length - 1; i >= 0; i--) {
        parolaInvertita += parolaInserita[i]; 
        console.log(parolaInvertita);
    }

    return parolaInvertita;
}