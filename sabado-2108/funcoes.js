//SOLUÇÃO 1
function parOuImpar1(numero) {
  var result = numero % 2

  if (result == 0) {
    console.log('Esse numero é par')
  } else {
    console.log('Esse numero é impar')
  }

  var resultado = numero
}

parOuImpar1(7)

//SCOLUÇÃO 2
function parOuImpar2(numero) {
  if (numero % 2 == 0) {
    console.log('Esse numero é par')
  } else {
    console.log('Esse numero é impar')
  }
}

parOuImpar2(7)
//As funções acima não retornam ao programa principal
//apenas apresentam um mensagem ao usuario

//SOLUÇÃO 3
function parOuImpar3(numero) {
  var resultado = numero % 2 == 0 ? 'Par' : 'Impar'
  return resultado
}

var resposta = parOuImpar3(12)
console.log(`Esse numero é ${resposta}`)

//SOLUÇÃO 4
function parOuImpar4(numero) {
  return (resultado = numero % 2 == 0 ? 'Par' : 'Impar')
}

console.log(`Esse numero é ${parOuImpar4(5)}`)
