let botonLike = document.querySelector(".boton-1")
let contadorLike = document.querySelector(".contador")
let contadorInicial = 0;

botonLike.addEventListener('click', imprimirLike);

function imprimirLike(){
    contadorInicial++;
    contadorLike.innerText = contadorInicial;
}

// =====================================================

let botonLike2 = document.querySelector(".boton-2")
let contadorLike2 = document.querySelector(".contador-2")
let contadorInicial2 = 0;

botonLike2.addEventListener('click', imprimirLike2);

function imprimirLike2(){
    contadorInicial2++;
    contadorLike2.innerText = contadorInicial2;
}

// =====================================================

let botonLike3 = document.querySelector(".boton-3")
let contadorLike3 = document.querySelector(".contador-3")
let contadorInicial3 = 0;

botonLike3.addEventListener('click', imprimirLike3);

function imprimirLike3(){
    contadorInicial3++;
    contadorLike3.innerText = contadorInicial3;
}

// =====================================================
