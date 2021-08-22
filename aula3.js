const livro = function (nome, editora, paginas) {
  ;(this.nome = nome), (this.editora = editora), (this.paginas = paginas)

  this.anunciar = function () {
    console.log(`O livro ${this.nome} ta a venda!`)
  }
}

const livroHP = new livro('HP', 'TE', 300)

console.log(livroHP)

livroHP.anunciar()
