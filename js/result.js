const urlParams = new URLSearchParams(window.location.search);
const punteggio = decodeURIComponent(urlParams.get('punteggio'));
console.log('Punteggio: ' + punteggio);


let divEsito=document.getElementById('div-esito');
let paragrafoPunteggio=document.createElement('p');
paragrafoPunteggio.innerHTML=punteggio;

divEsito.appendChild(paragrafoPunteggio);

