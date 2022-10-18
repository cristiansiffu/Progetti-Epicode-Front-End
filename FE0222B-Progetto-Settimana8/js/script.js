"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World');
    class User {
        constructor(_carica, _numeroChiamate) {
            this.carica = _carica;
            this.numeroChiamate = _numeroChiamate;
        }
        ricarica(unaRicarica) {
            this.carica += unaRicarica;
        }
        chiamata(minutiDurata = Math.floor(Math.random() * 10)) {
            const tariffa = 0.2;
            this.carica = this.carica - tariffa - (tariffa * minutiDurata);
            this.numeroChiamate++;
        }
        numero404() {
            return Number(this.carica.toFixed(1));
        }
        getNumeroChiamate() {
            return this.numeroChiamate;
        }
        azzeraChiamate() {
            this.numeroChiamate = 0;
        }
    }
    ;
    let FirstUser = new User(10, 0);
    let SecondUser = new User(10, 0);
    let ThirdUser = new User(10, 0);
    let col_1 = document.getElementById('col-1');
    let col_2 = document.getElementById('col-2');
    let col_3 = document.getElementById('col-3');
    let a1 = document.getElementById('first');
    let a2 = document.getElementById('second');
    let a3 = document.getElementById('third');
    let utente1 = document.createElement('h1');
    let contatore1 = document.createElement('h3');
    let saldo1 = document.createElement('h2');
    let utente2 = document.createElement('h1');
    let contatore2 = document.createElement('h3');
    let saldo2 = document.createElement('h2');
    let utente3 = document.createElement('h1');
    let contatore3 = document.createElement('h3');
    let saldo3 = document.createElement('h2');
    col_1.appendChild(utente1);
    col_1.appendChild(contatore1);
    col_1.appendChild(saldo1);
    col_2.appendChild(utente2);
    col_2.appendChild(contatore2);
    col_2.appendChild(saldo2);
    col_3.appendChild(utente3);
    col_3.appendChild(contatore3);
    col_3.appendChild(saldo3);
    utente1.innerText = 'First User';
    contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
    saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
    utente2.innerText = 'Second User';
    contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
    saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
    utente3.innerText = 'Third User';
    contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
    saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
    let btnChiama1 = document.createElement('button');
    btnChiama1.setAttribute('class', 'btn btn-info w-50 mt-1');
    btnChiama1.innerText = 'Chiama';
    col_1.appendChild(btnChiama1);
    btnChiama1.addEventListener('click', function () {
        if (FirstUser.numero404() > 0) {
            console.log(FirstUser.numero404());
            FirstUser.chiamata();
        }
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
        saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
        checkCredit1();
    });
    let btnRicarica1 = document.createElement('button');
    btnRicarica1.setAttribute('class', 'btn btn-success w-50 mt-1');
    btnRicarica1.innerText = 'Ricarica';
    col_1.appendChild(btnRicarica1);
    btnRicarica1.addEventListener('click', function () {
        FirstUser.ricarica(10);
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
        saldo1.innerText = 'Saldo disponibile: ' + FirstUser.numero404() + '€';
        checkCredit1();
    });
    let btnReset1 = document.createElement('button');
    btnReset1.setAttribute('class', 'btn btn-danger w-100 mt-1');
    btnReset1.innerText = 'Reset Chiamate';
    col_1.appendChild(btnReset1);
    btnReset1.addEventListener('click', function () {
        FirstUser.azzeraChiamate();
        contatore1.innerText = 'Numero delle chiamate: ' + FirstUser.getNumeroChiamate();
    });
    let btnChiama2 = document.createElement('button');
    btnChiama2.setAttribute('class', 'btn btn-info w-50 mt-1');
    btnChiama2.innerText = 'Chiama';
    col_2.appendChild(btnChiama2);
    btnChiama2.addEventListener('click', function () {
        if (SecondUser.numero404() > 0) {
            console.log(SecondUser.numero404());
            SecondUser.chiamata();
        }
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
        saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
        checkCredit2();
    });
    let btnRicarica2 = document.createElement('button');
    btnRicarica2.setAttribute('class', 'btn btn-success w-50 mt-1');
    btnRicarica2.innerText = 'Ricarica';
    col_2.appendChild(btnRicarica2);
    btnRicarica2.addEventListener('click', function () {
        SecondUser.ricarica(10);
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
        saldo2.innerText = 'Saldo disponibile: ' + SecondUser.numero404() + '€';
        checkCredit2();
    });
    let btnReset2 = document.createElement('button');
    btnReset2.setAttribute('class', 'btn btn-danger w-100 mt-1');
    btnReset2.innerText = 'Reset Chiamate';
    col_2.appendChild(btnReset2);
    btnReset2.addEventListener('click', function () {
        SecondUser.azzeraChiamate();
        contatore2.innerText = 'Numero delle chiamate: ' + SecondUser.getNumeroChiamate();
    });
    let btnChiama3 = document.createElement('button');
    btnChiama3.setAttribute('class', 'btn btn-info w-50 mt-1');
    btnChiama3.innerText = 'Chiama';
    col_3.appendChild(btnChiama3);
    btnChiama3.addEventListener('click', function () {
        if (ThirdUser.numero404() > 0) {
            console.log(ThirdUser.numero404());
            ThirdUser.chiamata();
        }
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
        saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
        checkCredit3();
    });
    let btnRicarica3 = document.createElement('button');
    btnRicarica3.setAttribute('class', 'btn btn-success w-50 mt-1');
    btnRicarica3.innerText = 'Ricarica';
    col_3.appendChild(btnRicarica3);
    btnRicarica3.addEventListener('click', function () {
        ThirdUser.ricarica(10);
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
        saldo3.innerText = 'Saldo disponibile: ' + ThirdUser.numero404() + '€';
        checkCredit3();
    });
    let btnReset3 = document.createElement('button');
    btnReset3.setAttribute('class', 'btn btn-danger w-100 mt-1');
    btnReset3.innerText = 'Reset Chiamate';
    col_3.appendChild(btnReset3);
    btnReset3.addEventListener('click', function () {
        ThirdUser.azzeraChiamate();
        contatore3.innerText = 'Numero delle chiamate: ' + ThirdUser.getNumeroChiamate();
    });
    a1.addEventListener('click', () => {
        col_3.classList.add('d-none');
        col_2.classList.add('d-none');
        col_1.classList.remove('d-none');
    });
    a2.addEventListener('click', () => {
        col_3.classList.add('d-none');
        col_1.classList.add('d-none');
        col_2.classList.remove('d-none');
    });
    a3.addEventListener('click', () => {
        col_1.classList.add('d-none');
        col_2.classList.add('d-none');
        col_3.classList.remove('d-none');
    });
    function checkCredit1() {
        let check1 = FirstUser.numero404();
        if (check1 < 0) {
            btnChiama1.classList.add('disable');
        }
        else {
            btnChiama1.classList.remove('disable');
        }
    }
    function checkCredit2() {
        let check2 = SecondUser.numero404();
        if (check2 < 0) {
            btnChiama2.classList.add('disable');
        }
        else {
            btnChiama2.classList.remove('disable');
        }
    }
    function checkCredit3() {
        let check3 = ThirdUser.numero404();
        if (check3 < 0) {
            btnChiama3.classList.add('disable');
        }
        else {
            btnChiama3.classList.remove('disable');
        }
    }
});
