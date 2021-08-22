let texto = '10.99'
let number = 10.9999999945

let numero = parseFloat(texto)
console.log(texto)
console.log(typeof numero)
console.log(parseInt(texto))
console.log(number.toFixed(2))
console.log(isNaN(texto))
console.log(isNaN(number))
console.log(isNaN(numero))

var nome = 'Tainá'

console.log(nome.length)

var frase = 'Essa aula ta muito doida'
console.log(frase.indexOf('muito'))

var doida = frase.slice(19, 24)
console.log(doida)

var frase = 'Essa aula ta muito doida'

console.log(frase.toUpperCase())
console.log(frase.toLocaleLowerCase())
console.log(frase)

var nome = '       Jaque'

console.log(nome.trim())

var frase = 'Essa aula ta muito doida'
console.log(frase.split(' '))

console.log(frase.lastIndexOf('doida'))
