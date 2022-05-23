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

calc = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota + alunos[4].nota + alunos[5].nota) / 6
if (calc >= 7){
    console.log('Os alunos estão acima da média')
}
else{
    console.log('Os alunos estão abaixo da média')
}