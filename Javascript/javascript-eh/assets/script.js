var elogios = [
    "Não é github, mas é gatinho",
    "Máquina de vencer",
    "Ícone incompreendido",
    "Responsivo",
    "Cristal",
    "Sensato",
    "Zero defeitos",
    "1 nene",
    "Jóia rara",
    "Maravigold",
    "1 pão",
];

function elogiar(){
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios [random];
}