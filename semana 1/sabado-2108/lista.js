let nomes = ['Tainá', 'Stelinha', 'Tequila', 'Pituzinho', 'Jaque']

//do{
for (let i = 1; i <= nomes.length; i++) {
  console.log(`${i}.${nomes[i]}`)
}

////}
//while()

let escolha = 2
console.log(`Opção: ${escolha}`)

nomes.slice(escolha - 1, 1)

console.log('LIsta após a exclusão')
