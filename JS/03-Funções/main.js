//estrutura de uma função
/*
function NomedaFuncao(valor1,valor2){
    return valor1 * valor2
}
*/

//Funcoes
function AddNums(num1 = 2, num2 = 5){
    return num1 + num2 
}

const somaAddNums = (num1 = 2, num2 = 5 ) => {
      return num1 + num2
}
//console.log(AddNums());
let x = AddNums(10,11);
console.log(x)

//criando Arrow Function
const hello = (primeiro = 2, segundo = 2) =>  {
   return primeiro * segundo 
}
console.log(hello())

//criando objetos 
const aluno = {
    primeiroNome : 'Mateus',
    segundoNome : 'lost',
    idade : '19',
}

const boasVindas = () => {
    alert('bem vindo a nossa pagina')
    console.log('bem vindo a nossa pagina')
}

function eventClick(){
    console.log('Você clicou aqui')
}