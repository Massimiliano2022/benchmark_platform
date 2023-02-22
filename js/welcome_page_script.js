function checkPromise() {

    let promise = document.getElementById('promise');
    let divForm = document.getElementById('input');
    let paragrafoErrore = document.createElement('p');
    if(promise.checked){
        window.location.href = 'test.html';
        timer();
    }else{
        paragrafoErrore.textContent = 'Devi necessariamente accettare le condizioni per procedere.'
        paragrafoErrore.classList.add('colore-viola');
        divForm.appendChild(paragrafoErrore);
    }
}