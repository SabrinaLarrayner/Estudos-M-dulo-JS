function sum (soma1,  soma2) {
    return soma1 + soma2;
}

function exp (base, expoente){
     return base ** expoente
}

function round (valor, precisao){
    var multiplier = exp (10, precisao|| 0);
    return Math.round(valor * multiplier) / multiplier;
}       