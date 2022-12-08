const busquedaResultado = document.getElementById("busqueda_resultado");
var numeroCollatz = document.getElementById("numeroCollatz");

var searchBand = false;
var arrayValue = [], arrayParImpar = [];
var nums;
var searchContador = 0;

document.getElementById("botonCollatz").onclick = function() {
    nums = numeroCollatz.value;
        searchBand = false;
        searchNumero();  
};

function searchNumero() {
    searchComprobacion();
    if (nums <= -1) {
        if (document.contains(document.querySelector(".miP"))) {
            document.querySelector(".miP").remove();
          };
          if (document.contains(document.querySelector(".miLi"))) {
            while (document.querySelector(".miLi")) {
                document.querySelector(".miLi").remove();
            }
          };
        const fragment = document.createDocumentFragment();
        const p = document.createElement("P");
        p.setAttribute("class", "miP");
        p.textContent = `El número comprobado ${numeroCollatz.value} es negativo y no es un número válido para la conjetura de Collatz`;
        fragment.appendChild(p);
        busquedaResultado.appendChild(fragment);
        return;
    }; 
    if (searchBand == true) {
        arrayParImpar.push("Se confirma la conjetura de collatz")
        if (document.contains(document.querySelector(".miP"))) {
            document.querySelector(".miP").remove();
          };
          if (document.contains(document.querySelector(".miLi"))) {
            while (document.querySelector(".miLi")) {
                document.querySelector(".miLi").remove();
            }
          };
        const fragment = document.createDocumentFragment();
        const p = document.createElement("P");
        p.setAttribute("class", "miP");
        p.textContent = `El número comprobado es: ${numeroCollatz.value}`;
        fragment.appendChild(p);
        
        for (let i = 0; i < arrayValue.length; i++) {
            const li = document.createElement("li");
            li.setAttribute("class", "miLi");
            li.textContent = `${arrayValue[i]} ${arrayParImpar[i]}`;
            fragment.appendChild(li);
        };
        busquedaResultado.appendChild(fragment);
        arrayValue = [];
        arrayParImpar = new Array;
        return;
    };
    if (searchContador == 1000000000){
        busquedaResultado.innerHTML = `Es posible que ${numeroCollatz.value} no cumpla la conjetura de Collatz. Los resultados son: ${arrayValue}`;
        return;
    };
    if (nums%2 == 0 && nums > 1) {
        arrayParImpar.push(" /2=")
        searchPar();
    };
    if (nums%2 != 0 && nums > 1) {
            arrayParImpar.push(" *3 +1=")
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
    if (searchBand == true || nums == 1) {
        return;
    };
    searchContador++
    nums = nums/2;
    searchNumero();
};

function searchImpar() {
    if (searchBand == true || nums == 1) {
        return;
    };
    searchContador++
    nums = nums*3+1;
    searchNumero();
};