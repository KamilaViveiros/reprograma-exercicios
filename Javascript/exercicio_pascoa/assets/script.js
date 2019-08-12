window.addEventListener('DOMContentLoaded', function(event) {
    
    const getPaises = document.querySelector('#paises');
    const getCidade = document.querySelector('#labelCidade');

    getPaises.addEventListener('change', function (){
    const getValor = this.value;
    if (getValor === `Austrália`){
        resultado.innerHTML = `🍫Minha amiga vai ganhar dois ovos de chocolate branco🍫`;
    } 
    else if (getValor === `Estados Unidos`){
        resultado.innerHTML = `🍫Minha amiga vai ganhar dois ovos de chocolate ao leite🍫`;
    } 
    
    else if (getValor === `Inglaterra`){
        resultado.innerHTML = `🍫Minha amiga vai ganhar dois ovos de chocolate amargo🍫`;
    }

    else {
        document.getElementById("container__cidade").style.display = "block";
    }

        getCidade.addEventListener('change', function (){
            let getBrasil = this.value;
            if (getBrasil === `caxias`){
            resultado.innerHTML = `🍫 Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco 🍫`;
            } 
            else if (getBrasil === `porto`){
            resultado.innerHTML = `🍫 Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite 🍫`;
            } 
            else {
            resultado.innerHTML = `🍫Minha amiga vai ganhar duas caixas de bombons🍫`;

            }
        });
    });
});
