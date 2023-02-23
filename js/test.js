const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "medium",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
        indice: 0
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
        indice: 1
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "hard",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
        indice: 2
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "medium",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
        indice: 3
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
        indice: 4
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
        indice: 5
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
        indice: 6
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
        indice: 7
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "medium",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
        indice: 8
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "hard",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
        indice: 9
    },
];

window.onload = function () {
    // TIPS:

    // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
    // Per ogni domanda, crea un container e incorporale tutte all'interno. 
    // Crea poi dei radio button
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
    // con le risposte corrette e incorrette come opzioni
    // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
    //
    // SE MOSTRI UNA DOMANDA ALLA VOLTA:
    // Mostra la prima domanda con il testo e i radio button.
    // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
    // salvando le risposte dell'utente in una variabile
};

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀

//let questionsOriginale = questions;

let questionsOriginale = [...questions];

let numeroDomandeTotale = questions.length;

let risposteUtente = [];
let timerId;

let titoloDomanda = document.getElementById('domanda');
let risposteBtns = document.getElementsByClassName('risposta-btn');

let domandaObj;

let selectedBtn = null;

let contatoreDomande = 0;

selezionaDomanda(questions);

function selezionaDomanda(questions) {

    clearInterval(timerId);

    let numRand = Math.floor(Math.random() * questions.length);

    domandaObj = questions[numRand];

    let titolo = domandaObj.question;

    let tempo;

    titoloDomanda.innerHTML = titolo;

    contatoreDomande++;

    document.getElementById('nDomanda').innerHTML = 'QUESTION ' + contatoreDomande + '<span>/' + numeroDomandeTotale + '</span>';

    if (domandaObj.incorrect_answers.length == 1) {
        generaDueBottoni(domandaObj);
    } else {
        generaQuattroBottoni(domandaObj);
    }

    for (let i = 0; i < risposteBtns.length; i++) {
        risposteBtns[i].addEventListener('click', function (event) {
            if (selectedBtn) {
                selectedBtn.removeAttribute('id');
            }
            event.target.id = 'selected';
            selectedBtn = event.target;
        });
    }

    if (domandaObj.difficulty == 'easy') {
        tempo = 30;
    } else if (domandaObj.difficulty == 'medium') {
        tempo = 45;
    } else {
        tempo = 60;
    }

    let timerParag = document.getElementById('timer-sec');
    timerParag.innerHTML = tempo;

    let paragrafiTestoSecondi = document.getElementsByClassName('testo-secondi');
    let referenceElement = paragrafiTestoSecondi[0];

    referenceElement.parentNode.insertBefore(timerParag, referenceElement.nextSibling);

    timerId = setInterval(function () {
        tempo--;
        timerParag.innerHTML = tempo;
        if (tempo <= 0) {
            clearInterval(timerId);
            confermaRisposta();
        }
    }, 1000);
}

function generaDueBottoni(domandaObj) {
    /*
    La funzione Math.random() restituisce un numero casuale compreso tra 0 e 1.
    Quando sottraiamo 0.5 a questo numero casuale, otteniamo un valore compreso tra -0.5 e 0.5. 
    In questo modo, quando ordineremo gli elementi dell'array con il metodo sort(), 
    avremo una probabilità del 50% che l'elemento venga spostato prima dell'altro 
    (caso in cui il valore restituito da Math.random() sia negativo), 
    e una probabilità del 50% che venga spostato dopo (caso in cui il valore restituito da Math.random() sia positivo).
    In sintesi, il sorteggio è effettuato in modo casuale in quanto non è possibile sapere a priori se Math.random() 
    restituirà un valore positivo o negativo.
    */

    /* Usando lo spread operator ..., si uniscono questi due array in un unico array chiamato risposte. */

    let risposte = [...domandaObj.incorrect_answers, domandaObj.correct_answer];
    risposte.sort(() => Math.random() - 0.5);

    let container = document.createElement('div');
    container.classList.add('risposte-quiz');

    risposte.forEach(function (risposta) {
        let button = document.createElement('button');
        button.innerHTML = risposta;
        button.classList.add('risposta-btn');
        container.appendChild(button);
    });

    document.getElementById('domanda').appendChild(container);

    //quizDiv.insertBefore(container, domanda.nextSibling);

}

function generaQuattroBottoni(domandaObj) {
    let risposte = [...domandaObj.incorrect_answers, domandaObj.correct_answer];
    risposte.sort(() => Math.random() - 0.5);

    let container1 = document.createElement('div');
    container1.classList.add('risposte-quiz');

    let container2 = document.createElement('div');
    container2.classList.add('risposte-quiz');

    for (let i = 0; i < risposte.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = risposte[i];
        button.classList.add('risposta-btn');
        if (i < 2) {
            container1.appendChild(button);
        } else {
            container2.appendChild(button);
        }
    }

    document.getElementById('domanda').appendChild(container1);
    document.getElementById('domanda').appendChild(container2);

    /*quizDiv.insertBefore(container1, domanda.nextSibling);
    quizDiv.insertBefore(container2, domanda.nextSibling);*/


}

function confermaRisposta() {

    let rispostaSelezionata = document.querySelector('.risposta-btn#selected');

    let valoreRisposta;
    if (rispostaSelezionata === null) {
        valoreRisposta = '';
    } else {
        valoreRisposta = rispostaSelezionata.innerHTML;
    }

    let risposta = {
        indice: domandaObj.indice,
        valore: valoreRisposta
    };

    if (rispostaSelezionata) {

        risposteUtente.push(risposta);

        rispostaSelezionata.classList.remove('selected');

    } else {
        risposteUtente.push(risposta);
    }

    eliminaDomanda(domandaObj);

    if (contatoreDomande != numeroDomandeTotale) {

        /*in questo momento i bottoni vengono creati dentro al paragrafo 
        inseririli dentro al div quiz ma sotto al paragrafo
        e in questo punto rimuovere tutti i bottoni o il div quiz 
        prima di lanciare nuovamente selezionaDomanda
        */

        selezionaDomanda(questions);
    } else {
        calcolaPunteggio(risposteUtente);
    }
}

function eliminaDomanda(domandaObj) {
    if (questions.includes(domandaObj)) {
        questions.splice(questions.indexOf(domandaObj), 1);
    }
}

function calcolaPunteggio(risposteUtente) {

    let percCorrette;
    let percSbagliate;

    console.log(questionsOriginale);

    clearInterval(timerId);

    let indiceRisposta;
    let valoreRisposta;

    let punteggio = 0;

    for (let i = 0; i < risposteUtente.length; i++) {
        indiceRisposta = risposteUtente[i].indice;
        valoreRisposta = risposteUtente[i].valore;

        console.log(indiceRisposta);
        console.log(valoreRisposta);

        if (valoreRisposta == questionsOriginale[indiceRisposta].correct_answer) {
            punteggio++;
        }

    }

    percCorrette = punteggio * 10;
    percSbagliate = (10 - punteggio) * 10;

    const percCorretteCodificate = encodeURIComponent(percCorrette);
    const percSbagliateCodificate = encodeURIComponent(percSbagliate);

    window.location.replace(`result.html?corrette=${percCorretteCodificate}&sbagliate=${percSbagliateCodificate}`);

}
