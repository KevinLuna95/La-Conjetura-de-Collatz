const busquedaResultado = document.getElementById("busqueda_resultado");
var numeroCollatz = document.getElementById("numeroCollatz");

var searchBand = false;
var arrayValue = [];
var nums;
var searchContador = 0;


document.getElementById("botonCollatz").addEventListener("click",()=> {
    nums = numeroCollatz.value;
    searchBand = false;
    searchNumero();
});

function searchNumero() {
    searchComprobacion();
    console.log(searchContador)
    if (searchBand == true) {
        busquedaResultado.innerHTML = `
        <p id="searchResultado">${numeroCollatz.value}</p>
        <p id="searcherArray">El cálculo es: ${arrayValue}</p>
        `;
        arrayValue = [];
        return;
    };
    if (searchContador == 1000000000){
        busquedaResultado.innerHTML = `Es posible que ${numeroCollatz.value} no cumpla la conjetura de Collatz. Los resultados son: ${arrayValue}`;
        return;
    };
    if (nums%2 == 0) {
        searchPar();
        
    };
    if (nums%2 != 0) {
        searchImpar();
    };
};

function searchComprobacion() {
    arrayValue.push(nums);
    if (nums == 1 || nums == 0) {
        searchBand = true;
        return;
    };
    if (operaciones == 1000) {
        busquedaResultado.innerHTML = `Es posible que ${numeroCollatz.value} no cumpla la conjetura de Collatz. Los resultados son: ${JSON.stringify(arrayValue)}`;
    };  
};

function searchPar() {
    if (searchBand == true) {
        return;
    };
    searchContador++
    nums = nums/2;
    searchNumero();
};

function searchImpar() {
    if (searchBand == true) {
        return;
    };
    searchContador++
    nums = nums*3+1;
    searchNumero();
};