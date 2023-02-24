const params = new URLSearchParams(window.location.search);
const corrette = params.get('corrette');
const sbagliate = params.get('sbagliate');
const totaleDomande=params.get('totaleDomande');

console.log('Risposte corrette: ' + corrette);
console.log('Risposte sbagliate: ' + sbagliate);
console.log('TotaleDomande: ' + totaleDomande);

let circleBarProgressConfig = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [sbagliate,corrette], // percentuali di completamento e incompletamento della barra
            backgroundColor: [
                '#C2128D', // colore della parte completata
                '#00FFFF' // colore della parte incompleta
            ],
            borderWidth: 0, // spessore del bordo del grafico
            cutout: '80%' // dimensioni del foro centrale della circle bar progress
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        //cutoutPercentage: 80,
        cutoutPercentage: 85,
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            enabled: false
        },
        hover: {
            mode: null
        }
    }
};

let circleBarProgressCanvas = document.getElementById('circle-bar-progress');
let circleBarProgress = new Chart(circleBarProgressCanvas, circleBarProgressConfig);

let divTesto = document.getElementById('circle-bar-progress-value');
console.log(divTesto);
console.log(divTesto.innerHTML);

let pTitle = document.createElement('p');
let pSubTitle = document.createElement('p');
let pCertificato = document.createElement('p');
let pCheck = document.createElement('p');

pSubTitle.classList.add('coloreBlu');
pCertificato.classList.add('paragrafi-small');
pCheck.classList.add('paragrafi-small');

divTesto.appendChild(pTitle);
divTesto.appendChild(pSubTitle);
divTesto.appendChild(pCertificato);
divTesto.appendChild(pCheck);


if(corrette >= 50){
    pTitle.innerHTML = 'Congratulations!';
    pSubTitle.innerHTML = 'You passed the exam.';
    pCertificato.innerHTML = `We'll send you the certificate in few minutes`;
    pCheck.innerHTML = 'Check your email (including promotions / spam folder)';
}else{
    pTitle.innerHTML = 'Oh no!';
    pSubTitle.innerHTML = 'You failed the exam.';
    pCertificato.innerHTML = `We'll not send you the certificate in few minutes`;
    pCheck.innerHTML = `Don't check your email!You are a goat!!! GOAT GOAT`;
}


let paragPercCorrect = document.getElementById('corrette-percentuale');
paragPercCorrect.innerHTML=corrette+'%';

let paragPercWrong = document.getElementById('sbagliate-percentuale');
paragPercWrong.innerHTML=sbagliate+'%';

let pCorretteQuestion=document.getElementById('corrette-question');
pCorretteQuestion.innerHTML=corrette/10 +'/'+totaleDomande +' questions';

let pSbagliateQuestion=document.getElementById('sbagliate-question');
pSbagliateQuestion.innerHTML=sbagliate/10 +'/'+totaleDomande +' questions';

function votaci() {
    window.location.href = "review.html";    
}