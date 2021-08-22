class Pessoa {
  constructor(nome, idade, cnh) {
    ;(this.nome = nome), (this.idade = idade), (this.cnh = cnh)
  }

  dirigir() {
    console.log(`O número da sua CNH é ${this.cnh} `)
  }

  dormir() {
    console.log(`${this.nome} é hora de dormir`)
  }

  comer() {
    console.log(`A sua idade é ${this.idade}`)
  }
}

const pessoa = new Pessoa('Fofinha', '2 aninhos', '23232323')

pessoa.dirigir()
pessoa.comer()
pessoa.dormir()
