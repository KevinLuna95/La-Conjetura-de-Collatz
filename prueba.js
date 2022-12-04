const mostrarResultado = document.getElementById("contador_p");
const noCumple = document.getElementById("collatz_fail");
const worker = new Worker("searcher.js")

var operaciones = 0;
var contador = 1;
var res = 1;
var band = false;
var last3results = [];
var results =[];
const sequence = [4, 2, 1];


function numero() {
    array()
    comprobacion()
    if (res%2 == 0) {
        collatzPar();
    };
    if (res%2 != 0) {
        collatzImpar();
    };
    if (band == true){
        last3results = [];
        results = [];
        operaciones = 0;
        band = false;
        mostrarResultado.innerHTML = `${contador}`
        contador++
        res = contador
    };
};

let timer = setInterval(numero, 100);

function comprobacion() {
    if (JSON.stringify(last3results) == JSON.stringify(sequence)) {
            band = true;
            return;
    };
    if (operaciones == 1000000000) {
        noCumple.innerHTML = `Es posible que ${contador} no cumpla la conjetura de Collatz. Los resultados son: ${JSON.stringify(results)}`;
        clearInterval(timer);
    };
};

function array() {
    if (last3results.length == 3){
        last3results.shift();
        last3results.push(res);
        results.push(res);
    };
    if (last3results.length < 3){
        last3results.push(res)
        results.push(res);
    };
};

function collatzPar() {
    if (band == true){
        return;
    };
        res = res/2;
        operaciones ++;
        numero();
};

function collatzImpar() {
    if (band == true){
        return;
    };
        res = res*3+1;
        operaciones ++;
        numero();
};

numero();