//milesimo numero primo
let primoEncontrados = 0
let ehPrimo
let dividendo
for (dividendo = 2; primoEncontrados < 1001; dividendo++) {
  ehPrimo = true
  for (let divisor = 2; dividendo > divisor; divisor++) {
    if (dividendo % divisor == 0) {
      ehPrimo = false
      break
    }
  }

  if (ehPrimo == true) {
    primoEncontrados++
  }
}

console.log(`O 1001 numero primo é ${--dividendo}`)
