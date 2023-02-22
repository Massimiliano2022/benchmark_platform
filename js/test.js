const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
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
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
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

let timerInterval; 

timer();
selezionaDomanda(questions);

function timer() {
    let sec = 30;
    timerInterval = setInterval(function () {
        let timerSec = document.getElementById('timer-sec');
        if (sec < 10) {
            timerSec.innerHTML = '00:0' + sec;
        } else {
            timerSec.innerHTML = '00:' + sec;
        }
        sec--;
        if (sec < 0) {
            clearInterval(timerInterval);
            //selezionaDomanda(questions);
        }
    }, 1000);
}

function selezionaDomanda(questions) {

    let numRand = Math.floor(Math.random() * questions.length);
    let domandaObj = questions[numRand];
    let domanda = domandaObj.question;

    let titoloDomanda = document.getElementById('domanda');

    titoloDomanda.innerHTML = domanda;

    if(domandaObj.incorrect_answers.length == 1){
        generaDueBottoni(domandaObj);
    }else{
        generaQuattroBottoni(domandaObj);
    }

    let risposteBtns = document.getElementsByClassName('risposta-btn');
    for (let i = 0; i < risposteBtns.length; i++) {
        risposteBtns[i].addEventListener('click', selezionaRisposta);
    }

}

function generaDueBottoni(domandaObj) {
    let risposte = [...domandaObj.incorrect_answers, domandaObj.correct_answer];
    risposte.sort(() => Math.random() - 0.5);

    let container = document.createElement('div');
    container.classList.add('risposte-quiz');

    risposte.forEach(function(risposta) {
        let button = document.createElement('button');
        button.innerHTML = risposta;
        button.classList.add('risposta-btn');
        container.appendChild(button);
    });

    document.getElementById('domanda').appendChild(container);

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

}

function selezionaRisposta() {
  
    let rispostaSelezionata = this.innerHTML;

    console.log(rispostaSelezionata);

    clearInterval(timerInterval); 
  
    if (document.getElementById('timer-sec').innerHTML === '00:00') {
      selezionaDomanda(questions); 
    } else {
      selezionaDomanda(questions);
    }

    timer();

  }