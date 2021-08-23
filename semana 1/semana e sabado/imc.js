//Calculado IMC

var peso = 60;
var altura = 1.63;

imc = peso / Math.pow(altura,2);

if(imc < (18.5)){
    console.log('Abaixo do peso');
}else if((imc >= 18.6) && (imc <= 24.9)){
    console.log('Peso ideial (Parabéns!!)');
}
else if((imc >= 25.0) && (imc <= 29.9)){
    console.log('Levemente acima do peso');
}
else if((imc >= 30.0) && (imc <= 34.9)){
    console.log('Obesidade grau I');
}
else if((imc >= 35.0) && (imc <= 39.9)){
    console.log('Obesidade grau III(severa)');
}else{
    console.log('Obesidade III(mórbida)');
}


