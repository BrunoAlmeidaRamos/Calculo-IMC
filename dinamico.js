function pularLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostrar(frase) {
    document.write(frase);
    pularLinha();
}

function calculaImc(peso, altura) {
    return peso / (altura * altura);
}

var nome = prompt("Informe seu nome: ")
var alturaInformada = prompt(nome + ", iNFORME SUA ALTURA: ");
var pesoInformado = prompt(nome + ", INFORME SEU PESO: ");

var imc = calculaImc(pesoInformado, alturaInformada);

document.write(nome + ", o IMC calculado é " + imc);
