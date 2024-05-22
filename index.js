// let nome = prompt('qual seu nome?');

// console.log('O nome é:'(nome) );


// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console

function palindromo(nome){
let nomeMinusculo = nome.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
let nomeReverso = nome.split("").reverse().join("");
return nome.toLowerCase() === nomeReverso.toLowerCase()? "É palindromo" : "Não é palindromo";
}
console.log(palindromo());


 entrada = 15;

switch (true) {
    case (entrada % 3 === 0 && entrada % 5 === 0):
        console.log('fizzBuzz');
        break;
       
    case (entrada % 3 === 0):
        console.log('fizz');
        break;
       
    case (entrada % 5 === 0):
        console.log('buzz');
        break;

    default:
        console.log('usuario nao reconhecido');
}

// let familia = [50,30,25,39];

// let idade = 18;
// let ano = 10;   
// for(let i = 0; i <= ano ; i++) {
// console.log(idade+i);
// }


// const soma = familia.reduce(function(acumulador, valorAtual) {
// return acumulador + valorAtual;
// }, 0 );
// const media = soma / familia.length;            
// console.log(media);

// const frutas = ['banana', 'maçã', 'laranja', 'banana', 'maçã', 'banana'];

// const contagem = frutas.reduce((acumulador, fruta) => {
//   if (!acumulador[fruta]) {
//     acumulador[fruta] = 1;
//   } else {
//     acumulador[fruta]++;
//   }
//   return acumulador;
// }, {});

// console.log(contagem); 
// let array = [1, 2, 3, 4, 5];

