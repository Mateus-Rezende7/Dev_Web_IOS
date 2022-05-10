//trabalhando com string
// Concatenar

let exemplo1 = 10;
let exemplo2 = 2;
let  string1 = 'Aqui vai um texto';
//aspas simples
console.log('O resultado da soma é: ' + (exemplo1 + exemplo2))
//aspas duplas
console.log("O resultado da soma é: " + (exemplo1 + exemplo2))
//crase
console.log(`O resultado da soma é:  + ${exemplo1 + exemplo2}`)

// Metodos de string

// Acessa uma 
let string2 = 'Aqui vai um texto';
console.log(string2.charAt(0)) 

//exemplo com []   
console.log(string2[2])

// Tamanho da String
let string3 = 'Aqui vai um texto';
console.log(string3.length)

// Substring e Spli
let string6 = 'Mozzila';
console.log(string6.substring(1,3))

// Maiúsculas e minúsculas
let string4 = 'aqui vai um texto';
console.log(string4.toUpperCase()) 

let string5 = 'aqui vai um texto';
console.log(string4.toLowerCase()) 

//slipt
let string7 = 'A raposa é um animal esperto';
let string8 = string7.split(' ');
console.log(string8[3])

// Substituir uma string dentro da string
let string9 = 'Aqui vai um texto';
let string10 = string9.replace('Aqui', 'Kauan')
console.log(string10)

// Remover espaços da string
let string11 = '  Aqui vai um texto ';
console.log(string11.trim())

// Métodos de buscar em string
let string12 = 'Aqui vai um texto';
//string.index
console.log(string12.indexOf('Aqui'));
//string.lastindexof
console.log(string12.lastIndexOf('Aqui'));
//string.search()
console.log(string12.search('Aqui'))
//string.starWith()
console.log(string12.startsWith('S'))
//string.endsWith
console.log(string12.endsWith('.'));// false
console.log(string12.endsWith('i'));
console.log(string12.endsWith('I'));