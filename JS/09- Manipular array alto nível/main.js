//metodo forEash com arrays
 const frutas =['maca','pera','melancia']
 frutas.forEach(minhaFuncao);

 function minhaFuncao(index, item){
     console.log(`index: ${item}`);
     console.log(`Elemento: ${index}`);
 }

 //Com Arrow Function
 const frutas2 =['maca','pera','melancia']
 frutas.forEach((index, item)=>{
     console.log(`Indice: ${item}`);
     console.log(`Elemento: ${index}`);
 });

 // Metodo forEach com array de objetos
 // Forma mais enxuta de escrever funçôes 
 const tarefas = [
     {
         id:1,
         texto:'Aqui vai um texto'
     },
     {
         id:2,
         texto:'Aqui vai um texto'
     },
     {
         id:3,
         texto:'Aqui vai um texto'
     },
 ];

 tarefas.forEach((teste) => console.log(teste.texto))
 

 //metodo map
 const numeros = [16, 4, 9 ,25];
 const newArray = numeros.map(Math.sqrt);

 console.log('Array antigo');
 console.log(numeros);
 console.log('Novo Array');
 console.log(newArray);

 //outro exemplo de map

 const mapText = tarefas.map((valor) =>{
     return valor.texto
 })

 console.log(mapText);
 
 //metodo filter()
 const idade = [32, 15, 8, 98, 70]
 
 let filtroIdade = idade.filter((idades) =>{
      return idades  >= 18;
 })

 console.log(filtroIdade)

 //Metodo find ()
 const meuArray = [
     {Nome: 'Diego', altura: 12, atura:120,},
     {nome: 'Jissara', idade: 15, altura:170, sexo:'feminino'},
     {nome: 'Jheniffer', idade: 70, altura: 180, sexo:'feminino'}
 ]

console.log(
   meuArray.find((genero)=>{
       return genero.sexo === 'feminino';
   })
);


//Crie um array de objetos com quatro objetos 
//e cada objeto tera 4 propriedades
//e retorne o nome de todos os alunos
//Retorne todos os alunos que tirou nota maior que 6
//Retorne o primeiro aluno que tirou nota menor que 5

const alunos= [
    {aluno:'Doja Cat',
    nota: 10,
    altura: 160,
    time:'Palmeiras',
},
{
    aluno:'Kendrick Lamar',
    nota:11,
    altura:170,
    time:'Flamengo'
},
{
    aluno:'Tyler',
    nota:'4',
    altura:180,
    time:'Botafogo',
},
{
    aluno:'Rihanna',
    nota:'2',
    altura:'190',
    time:'Santos'
},
];
   