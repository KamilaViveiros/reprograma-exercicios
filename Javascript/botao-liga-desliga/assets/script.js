function desliga(){

    var meuBody = document.getElementById("fundo");

    if(meuBody.style.background == "red"){
        meuBody.style.background = "black";
    }
    else{
        meuBody.style.background = "red";
    }
}