function checkPromise() {

    let promise = document.getElementById('promise');
    let divForm = document.getElementById('input');
    let paragrafoErrore = document.createElement('p');
    if(promise.checked){
        window.location.href = 'test.html';
    }else{
        paragrafoErrore.textContent = 'Devi necessariamente accettare le condizioni per procedere.'
        divForm.appendChild(paragrafoErrore);
    }
}