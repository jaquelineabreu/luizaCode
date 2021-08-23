//Array também é tipo

var pizza = ['frango', 'carne', 'vegana']
var numeros = [1, 2, 3, 4, 5]

//O array também possi metodos

console.log(numeros.length)

numeros.push(123)
console.log(numeros)

numeros.pop()
console.log(numeros)

numeros.unshift(0)
console.log(numeros)

numeros.shift()
console.log(numeros)

numeros.splice(2, 0, 5)
console.log(numeros)

numeros.splice(2, 1)
console.log(numeros)

console.log(numeros.indexOf(10))

console.log(numeros.join(','))

console.log(numeros.reverse())

console.log(numeros[3])
