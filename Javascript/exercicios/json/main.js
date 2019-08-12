const listaDeAutores = JSON.stringify(autores)
const listaDeAutoresJs = JSON.parse(listaDeAutores)
console.log(listaDeAutoresJs)

const createTable = livro => {
    let table = ''
    livro.forEach((item) => {
        table += `
      <tr>
        <td>${item.livro}</td>
        <td>${item.autor}</td>
        <td>${item.genero}</td>
      </tr>
    `
    })
    return table
}

const orderBylivro = document.getElementById("ordenalivro")

orderBylivro.addEventListener("click", (e) => {
    const listaOrdenada = listaDeAutoresJs.livros.sort((elementoAnterior, proximoElemento) => {
        if (elementoAnterior.livro.toLowerCase() < proximoElemento.livro.toLowerCase()) {
            return -1
        }
        if (elementoAnterior.livro.toLowerCase() > proximoElemento.livro.toLowerCase()) {
            return 1
        }

        return 0
    })

    
    document.getElementById("table-section").innerHTML = createTable(listaOrdenada)
})


    const orderByAutor = document.getElementById("ordenaautor")

    orderByAutor.addEventListener("click", (e) => {
        const listaOrdenadas = listaDeAutoresJs.livros.sort((autorAnterior, autorProximo) => {

            return autorAnterior.autor.toLowerCase() < autorProximo.autor.toLowerCase() ? -1 : 1
        })


        document.getElementById("table-section").innerHTML = createTable(listaOrdenadas)
    })



    document.getElementById("table-section").innerHTML = createTable(autores.livros)

