const prompt = require("prompt-sync")();

function numValido(func){
    let num;
    num = parseFloat(prompt("Ingresa el numero por calcular: "));
    while(isNaN(num)||num === null){
    num = parseFloat(prompt("Ingresa un numero válido: "));
    }
    num = Math.round(num);
    func(num);
}

function factorial(x){
    let resultado = 1;
    for( let i=1 ; i<=x ; i++ ){
        resultado *= i;
    }
    console.log(`El factorial es: ${resultado}`);
}

numValido(factorial);