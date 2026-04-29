//so uma linha

/*
mais de uma linha
*/

const prompt = require("prompt-sync")();
const nome = prompt("Qual é o seu nome?");
console.log("Seu nome é:" + nome)

var i = 0;
//{} -> delimita o bloco

while(i < 5){
    console.log(i)
    i++; //i=i+1 incremento
}

// == compara o valor
// === compara o valor e tipo de dados

while(true){
    var opcao = prompt("Digite 0 para encerrar:");
    if(opcao == 0) break;
}

//do-while = vai executar pelo menos uma vezes, o while pode não executar se a decisão for falsa
i=5; //inicialização
do{
    console.log(i);
    i--; //i=i-1
} while (i>-1);

//inicialização ; decisão, incremento
//indicado para quando se conheçe a quantidade de vezes que vai repetir
//variavel j só existe dentro do bloco for - escopo

for (var j = 0; j < 5; j++){
    console.log(j);
}

//lupe infinito (da de fazer mais facil com while

for (;;) {
console. log(".");
}


