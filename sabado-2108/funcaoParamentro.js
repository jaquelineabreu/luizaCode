//SOLUÇÃO 1
function parOuImpar4(numero1, numero2) {
  return numero1 + numero2
}

var n1 = 10
var n2 = 20
console.log(`Esse numero é ${parOuImpar4(n1, n2)}`)

//SOLUÇÃO 2
function parOuImpar4(numero1, numero2 = 10) {
  return numero1 + numero2
}

var n1 = 10
var n2 = 20
console.log(`Esse numero é ${parOuImpar4(n1)}`)
