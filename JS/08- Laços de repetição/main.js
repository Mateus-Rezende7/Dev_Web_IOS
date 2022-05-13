// while
let contador = 1;
while (contador <= 10) {
console.log(`Valor = ${contador}`);
contador++;
}

do{
    console.log("bater palma")
    console.log(contador)
    contador++
    
}while (contador<= 5);


console.clear();
let cont = 10;
while (cont >= 0){
console.log(`Valor = ${cont}`)
cont--;
} 


// For
console.clear();
for (let valor = 10; valor < 0; i--) console.log(`Laço For número: ${valor}`)

// laços de repetição de array
const frutas = ['maca','laranja','pera',10];

for(let j =0; j < frutas.length; j++){
    console.log(`Nome: ${frutas[j]}`)
}
//Exercício em sala

console.clear();

const carros = ['uno','fit','palio','celta','corsa','corolla','renegade','fusca'];

 for(let c =0; c < carros.length; c+=2){
     console.log(`carros: ${carros[c]}`)
 }
 
 // Array de objetos e laços
console.clear();
const todos = [
{
id: 1,
text: 'Take out trash',
isCompleted: true,
},
{
id: 2,
text: 'Meeting with boss',
isCompleted: true,
},
{
id: 3,
text: 'Dentist appt',
isCompleted: false,
},
];
// For overloop
for (let t of todos) {
console.log(t);
console.log(t.text);
console.log(t.id);
}
