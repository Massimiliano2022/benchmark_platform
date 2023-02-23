const params = new URLSearchParams(window.location.search);
const corrette = params.get('corrette');
const sbagliate = params.get('sbagliate');

console.log('Risposte corrette: ' + corrette);
console.log('Risposte sbagliate: ' + sbagliate);


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