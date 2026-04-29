
//variavel tem identificador
//e armazena apenas uma imformação
var i = 10;

//arranjo é uma matriz d uma linha
//1xN -> é a quantidade de colunas

var arranjo = [9.5, 4.4, 10, 7]
console.log(arranjo);
console.log("Tamanho do arranjo:" + arranjo.length); //descobre o tamanho de um arranjo (quantidade de elementos nele)
console.log("arranjo[0]: " +arranjo[0]); //a primeira posição do arranjo é 0
console.log("arranjo[3]: " +arranjo[arranjo.lenght -1]); //a primeira posição do arranjo é -1
arranjo [2] = -999; //modifica o elemento na posição 2
console.log(arranjo); 

tabuleiroJogoDaVelha = [
    [0,0,0] //linha 0
    [0,0,0] //linha 1
    [0,0,0] //linha 2
];

for(var i = 0; i < tabuleiroJogoDaVelha.lenght; i++) {
    for (var j = 0; j < tabuleiroJogoDaVelha[i].lenght; j++) {
        console.log(tabuleiroJogoDaVelha[i][j]);
        process.stdout.write(""tabuleiroJogoDaVelha[i][j]);
        //no lugar de console.log da de usar process.stdout.write pra não pular linha se for uma string (texto)
    }
    console.log();
}