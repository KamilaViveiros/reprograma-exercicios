function calculoIMC(){
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resposta = document.getElementById("resposta");
    var resultado = peso / (altura * altura);
    var text;
    var lugarGif = document.getElementById("lugarGif");
    var gif;
    var cssclass;
    console.log("O seu IMC é " + resultado.toFixed(2));

    if(resultado < 18){
        text = "Uma deusa! 🎶"
        gif = `<img src="https://media.giphy.com/media/8rpAgi6uxg2f6/giphy.gif">`
        cssclass = "linha1";
    }
    else if(resultado >= 18 && resultado < 25){
        text = "Uma louca! 🎶"
        gif = `<img src="https://media.giphy.com/media/3oEduIGXQ22U58WPK0/giphy.gif">`
        cssclass = "linha2";
    }
    else if(resultado >= 25 && resultado < 30){
        text = "Uma feiticeira! 🎶"
        gif = `<img src="https://media.giphy.com/media/BtsUCpsQanuYo/giphy.gif">`
        cssclass = "linha3";
    }
    else if(resultado >=30 && resultado < 40){
        text = "Ela é demais! 🎶"
        gif = `<img src="https://media.giphy.com/media/1zKehuIFREz526ej2j/giphy.gif">`
        cssclass = "linha4";
    }
    else{
        text = "Meu Deus, ela é demais! 🎶"
        gif = `<img src="https://media.giphy.com/media/8YNkBf3FSDF2ck9AgP/giphy.gif">`
        cssclass = "linha5";
    }

    resposta.innerHTML = resultado.toFixed(2) + ' - ' + text; 
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
}