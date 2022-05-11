var pessoas = new  Array('Joaquim', 'José', 'Silva' , 'Xavier')
console.log(pessoas); 


let z = pessoas.unshift('Amanda');   
console.log(pessoas);

pessoas.pop();
console.log(pessoas)


let y = pessoas.push('Zuleica')
console.log(pessoas)

delete pessoas[3]
console.log(pessoas)

pessoas [3]= "Silva";
console.log(pessoas)

pessoas.shift()
console.log(pessoas)

delete pessoas[2]
console.log(pessoas)

pessoas[2] = "silvana"
console.log(pessoas)

var pessoasString = pessoas.join('-')
console.log('\n')
console.log('Quando a festa acabou sobrou apenas estas pessoas:')
console.log(pessoasString)