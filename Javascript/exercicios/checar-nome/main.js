class Botao{
    constructor(cor, tamanho, texto){
    this.cor = cor
    this.tamanho = tamanho
    this.texto = texto
    this.icone = icone 
}

desenhaBotao(){
    const novoBotaoNoDom = document.createElement('button')
    novoBotaoNoDom.setAttribute('class', `${this.cor} ${this.tamanho}`)
    novoBotaoNoDom.innerHTML = this.texto
    
        const icone = document.createElement('p')
        document.getElementsByClassName().appendChild()

    
    document.getElementById('buttons-section').appendChild(novoBotaoNoDom)
    console.log(novoBotaoNoDom)
}
}

const novoBotao = new Botao('roxo', 'grande', 'roxo')
novoBotao.desenhaBotao()

const botaoBranco = new Botao('branco', 'grande', 'branco')
botaoBranco.desenhaBotao()

const botaoLilas = new Botao('lilas', 'grande', 'lilas')
botaoLilas.desenhaBotao()

const botaoRoxo = new Botao('roxo', 'grande', 'roxo' ,icone)
botaoRoxo.desenhaBotao()