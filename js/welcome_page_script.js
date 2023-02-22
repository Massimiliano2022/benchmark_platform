function checkPromise() {

    let promise = document.getElementById('promise');
    let divForm = document.getElementById('input');
    let paragrafoErrore = document.createElement('p');
    if(promise.checked){
        window.location.href = 'test.html';
        timer();
    }else{
        paragrafoErrore.textContent = 'You must accept the conditions to proceed with the quiz.'
        paragrafoErrore.classList.add('colore-viola');
        divForm.appendChild(paragrafoErrore);
    }
}