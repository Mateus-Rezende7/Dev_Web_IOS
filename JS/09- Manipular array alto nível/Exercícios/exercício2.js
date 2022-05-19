const alunos = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2ºB'
    },

    {
        nome: 'Bruno',
        idade: 16,
        nota: 6,
        ano: '2ºC'
    },

    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2ºC'
    },

    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3ºC'
    },

    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3ºC'
    },

    {
        nome: ' Maria',
        idade: 14,
        nota: 4,
        ano: '1ºF'
    },
]

const anoNome = alunos.filter((aluno)=>{
     console.log(`O aluno ${aluno.nome} está no ${aluno.ano} do ensino medio`)
});

segundoAno = alunos.filter( ( aluno ) => aluno.ano.includes( "2" ) );

console.log( segundoAno );

if (media < 7 )
{
console.log("O aluno não esta na media");
}
else 
{
console.log("O aluno esta na media");
}
console.log( media );