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
            data: [corrette, sbagliate], // percentuali di completamento e incompletamento della barra
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

/*let divTesto = document.getElementById('circle-bar-progress-value')
let parra = document.createElement('p')
let parra1 = document.createElement('p')
parra1.classList.add('coloreBlu')
let parra2 = document.createElement('p')
let parra3 = document.createElement('p')

divTesto.appendChild(parra);
divTesto.appendChild(parra1);
divTesto.appendChild(parra2);
divTesto.appendChild(parra3);





if(corrette >= 50){
    parra.innerHTML = 'Congratulations!'
    parra1.innerHTML = 'You passed the exam.'

}else{
    parra.innerHTML = 'Oh no!'
    parra1.innerHTML = 'You failed the exam.'

}*/