class Livro {
  constructor(nome, editores, paginas) {
    ;(this.nome = nome), (this.editora = editores), (this.paginas = paginas)
  }

  anunciar() {
    console.log(`Indicando o livro ${this.nome}`)
  }

  exibirQuantidadePaginas() {
    console.log(`Esse livro tem ${this.paginas} paginas`)
  }
}

const livro = new Livro('HP', 'Tai Ed', 300)

livro.anunciar()
livro.exibirQuantidadePaginas()
